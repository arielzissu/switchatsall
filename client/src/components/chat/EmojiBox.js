import React from 'react';
import * as _ from 'lodash';
import axios from 'axios';

class EmojiBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      gifs: [],
      randomGifs: [],
      message: 'הזן את השאילתה שלך בשדה החיפוש',
      query: '',
      offset: 0,
      activeTab: 'gifs'
    };

    this.gifsScroll = React.createRef();

    this.selfWrap = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.getRandomGifs();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (!this.selfWrap.current || !this.selfWrap.current.contains(e.target)) {
      this.props.handleClose();
    }
  }

  handleChange = e => {
    this.setState({
      isLoading: true,
      gifs: [],
      query: e.target.value
    }, () => {
      if (this.state.query.length > 0) {
        this.searchGifs();
      } else {
        this.setState({
          isLoading: false,
          gifs: [],
          message: 'הזן את השאילתה שלך בשדה החיפוש'
        });
      }
    });
  };

  searchGifs = _.debounce(async () => {
    const query = this.state.query;

    this.removeScrollEvent();

    this.setState({
      message: ''
    });

    try {
      const results = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: 'fCluNP2WYQOBvk1Tp2kQQG21Ca9wMXHC',
          q: query,
          limit: 10,
          offset: this.state.offset
        }
      });

      if (results.status !== 200) {
        throw new Error('Status code not 200');
      }

      if (results.data.data.length === 0 && this.state.offset == 0) {
        throw new Error('שום דבר לא נמצא');
      }

      const gifs = results.data.data.map(gif => {
        return {
          original: gif.images.original.url,
          fixed: gif.images.fixed_height.url,
          id: gif.images.id
        };
      });

      this.setState({
        isLoading: false,
        gifs: [...this.state.gifs, ...gifs]
      }, () => {
        this.registerScrollEvent();
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        gifs: [],
        message: err.message
      });
    }
  }, 300);

  getRandomGifs = async () => {
    this.setState({
      isLoading: true
    });

    try {
      const randomGifsResult = await axios.get('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'fCluNP2WYQOBvk1Tp2kQQG21Ca9wMXHC',
          limit: 20
        }
      });

      if (randomGifsResult.status !== 200) {
        throw new Error('Status code not 200');
      }
  
      if (randomGifsResult.data.data.length === 0) {
        throw new Error('שום דבר לא נמצא');
      }

      const randomGifs = randomGifsResult.data.data.map(randomGif => {
        return {
          original: randomGif.images.original.url,
          fixed: randomGif.images.fixed_height.url,
          id: randomGif.id
        };
      });

      this.setState({
        isLoading: false,
        randomGifs
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        randomGifs: []
      });
    }
  };

  renderLastOrRandomGifs = () => {
    const lastGifs = JSON.parse(localStorage.getItem('recent_gifs'));

    if (lastGifs && lastGifs.length > 0) {
      return (
        <div className="messenger-content-emoji-box-content-results" ref={this.gifsScroll}>
          {lastGifs.map((gifItem, index) => {
            return (
              <a
                className="messenger-content-emoji-box-content-results-item"
                href="#"
                onClick={(e) => this.handleClick(e, gifItem)}
                key={index}
              >
                <img src={gifItem.original} alt="" />
              </a>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="messenger-content-emoji-box-content-results" ref={this.gifsScroll}>
          {this.state.randomGifs.map((gifItem, index) => {
            return (
              <a
                className="messenger-content-emoji-box-content-results-item"
                href="#"
                onClick={(e) => this.handleClick(e, gifItem)}
                key={index}
              >
                <img src={gifItem.fixed} alt="" />
              </a>
            );
          })}
        </div>
      )
    }
  }

  registerScrollEvent = () => {
    if (this.gifsScroll.current) {
      this.gifsScroll.current.addEventListener('scroll', this.scrollEvent);
    }
  };

  removeScrollEvent = () => {
    if (this.gifsScroll.current) {
      this.gifsScroll.current.removeEventListener('scroll', this.scrollEvent);
    }
  };

  scrollEvent = (e) => {
    const height = e.target.scrollHeight;
    const offsetHeight = e.target.offsetHeight;
    const scrollTop = e.target.scrollTop;

    if ((height - offsetHeight) <= scrollTop * 2) {
      this.setState({
        offset: this.state.offset + 10
      }, () => {
        this.searchGifs();
      });
    }
  };

  changeTab = (e) => {
    e.preventDefault();

    this.setState({
      activeTab: e.target.dataset.tab
    });
  };

  handleClick = (e, gif) => {
    e.preventDefault();

    let lastUsedGifs = JSON.parse(localStorage.getItem('recent_gifs') || '[]');

    if (lastUsedGifs && lastUsedGifs.length < 20) {
      lastUsedGifs.push(gif);
      lastUsedGifs = _.uniqBy(lastUsedGifs, 'id');
    }

    localStorage.setItem('recent_gifs', JSON.stringify(lastUsedGifs));

    this.props.onClick({
      type: 'gif',
      url: gif.original
    });

    this.props.handleClose();
  };

  renderTabs = () => {
    switch (this.state.activeTab) {
      case 'gifs':
        return (
          <div className="messenger-content-emoji-box-content">
            {this.state.isLoading ? (
              <p className="messenger-content-emoji-box-content-message">חכה רגע...</p>
            ) : (
              this.state.gifs.length > 0 ? (
                <div className="messenger-content-emoji-box-content-results" ref={this.gifsScroll}>
                  {this.state.gifs.map((gifItem, index) => {
                    return (
                      <a
                        className="messenger-content-emoji-box-content-results-item"
                        href="#"
                        onClick={(e) => this.handleClick(e, gifItem)}
                        key={index}
                      >
                        <img src={gifItem.fixed} alt="" />
                      </a>
                    );
                  })}
                </div>
              ) : (
                this.renderLastOrRandomGifs()
                // <p className="messenger-content-emoji-box-content-message">{this.state.message}</p>
              )
            )}
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div
        className={this.props.visible ? 'messenger-content-emoji-box messenger-content-emoji-box__visible' : 'messenger-content-emoji-box'}
        ref={this.selfWrap}
      >
        <div className="messenger-content-emoji-box-container">
            {this.state.activeTab === 'gifs' ? (
              <div className="messenger-content-emoji-box-search">
                <input
                  type="text"
                  placeholder="חיפוש GIF"
                  onChange={this.handleChange}
                  value={this.state.query}
                />
              </div>
            ) : null}

            {this.renderTabs()}

            <div className="messenger-content-emoji-box-tabs">
                <a
                  className={this.state.activeTab === 'gifs' ? 'messenger-content-emoji-box-tabs-item messenger-content-emoji-box-tabs-item__active' : 'messenger-content-emoji-box-tabs-item'}
                  href="#"
                  data-tab="gifs"
                  onClick={this.changeTab}
                >
                  GIFs
                </a>
            </div>
        </div>
      </div>
    );
  }
}

export default EmojiBox;
