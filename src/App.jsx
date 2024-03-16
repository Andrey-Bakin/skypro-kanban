import './App.css'
import PopBrowse from './components/PopBrowse/PopBrowse';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';

function App() {

  return (
    <div className="wrapper">
    {/* pop-up start*/}
    <PopExit />
    <PopNewCard />
    <PopBrowse />
    {/* pop-up end*/}
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a href="#user-set-target" className="header__user _hover02">
              Ivan Ivanov
            </a>
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              {/* <a href="">x</a> */}
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <div className="main__column column">
              <div className="column__title">
                <p>Без статуса</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _orange">
                        <p className="_orange">Web Design</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _orange">
                        <p className="_orange">Web Design</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _purple">
                        <p className="_purple">Copywriting</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _orange">
                        <p className="_orange">Web Design</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>Нужно сделать</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>В работе</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _purple">
                        <p className="_purple">Copywriting</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _orange">
                        <p className="_orange">Web Design</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>Тестирование</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>Готово</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default App;