let banners = {
    'homePage1': {
        parametrs: {
            smallScreen: {
                height: '400px',
                BgSize: '100% 100%',
                h3FontSize: '60px',
                ParagFontSize: '18px',
            },
            bigScreen: {
                height: '400px',
                BgSize: '100% 100%',
                h3FontSize: '35px',
                ParagFontSize: '14px',
            }
        },
        img1: {
            url: 'heading images/master-slide-02.jpg',
            p: {
                name: 'Women Collection 2018',
                animation: 'rotateInDownRight',
            },
            h3: {
                name: "New Arrivals",

                animation: 'lightSpeedIn ',
            }
        },
        img2: {
            url: 'heading images/master-slide-03.jpg',
            p: {
                name: 'Women Collection 2018',
                animation: 'rotateInDownRight',
            },
            h3: {
                name: "New Arrivals",

                animation: 'lightSpeedIn ',
            }
        },
        img3: {
            url: 'heading images/master-slide-04.jpg',
            p: {
                name: 'Women Collection 2018',
                animation: 'rotateInDownRight',
            },
            h3: {
                name: "New Arrivals",

                animation: 'lightSpeedIn ',
            }
        },
    },
    'homePage2': {
        parametrs: {
            smallScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '60px',
                ParagFontSize: '18px',
            },
            bigScreen: {
                height: '500px',
                BgSize: '100% 100%',
                h3FontSize: '35px',
                ParagFontSize: '14px',
            }
        },
        img1: {
            url: 'heading images/master-slide-02.jpg',
            p: {
                name: 'Women Collection 2018',
                animation: 'rotateInDownRight',
            },
            h3: {
                name: "New Arrivals",

                animation: 'lightSpeedIn ',
            }
        },
        img2: {
            url: 'heading images/master-slide-06.jpg',
            p: {
                name: 'Women Collection 2018',
                animation: 'rotateInDownRight',
            },
            h3: {
                name: "New Arrivals",

                animation: 'lightSpeedIn ',
            }
        },
        img3: {
            url: 'heading images/master-slide-07.jpg',
            p: {
                name: 'Women Collection 2018',
                animation: 'rotateInDownRight',
            },
            h3: {
                name: "New Arrivals",

                animation: 'lightSpeedIn ',
            }
            
        },
    },
    'homePage3': {
        parametrs: {
            smallScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '60px',
                ParagFontSize: '18px',
            },
            bigScreen: {
                height: '650px',
                BgSize: '120% 100%',
                h3FontSize: '35px',
                ParagFontSize: '14px',
            }
        },
        img1: {
            url: 'heading images/master-slide-08.jpg',
            h3: {
                name: "Leather Bags",
                animation: '',
            },
            p: {
                name: 'New Collection 2018',
                animation: '',
            },
        },
        img2: {
            url: 'heading images/master-slide-08.jpg',
            h3: {
                name: "Leather Bags",
                animation: '',
            },
            p: {
                name: 'New Collection 2018',
                animation: '',
            },
        },
        img3: {
            url: 'heading images/master-slide-08.jpg',
            h3: {
                name: "Leather Bags",
                animation: '',
            },
            p: {
                name: 'New Collection 2018',
                animation: '',
            },
        },
    },
    shop: {
        parametrs: {
            smallScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '60px',
                ParagFontSize: '18px',
            },
            bigScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '35px',
                ParagFontSize: '14px',
            }
        },
        img1: {
            url: 'heading images/heading-pages-02.jpg',
            h3: {
                name: "Leather Bags",
                animation: '',
            }
        },
    },
    features: {
        parametrs: {
            smallScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '60px',
                ParagFontSize: '18px',
            },
            bigScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '35px',
                ParagFontSize: '14px',
            }
        },
        img1: {
            url: 'heading images/master-slide-02.jpg',
            h3: {
                name:"CART",
            }
        },
    },
    blog: {
        parametrs: {
            smallScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '60px',
                ParagFontSize: '18px',
            },
            bigScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '35px',
                ParagFontSize: '14px',
            }
        },
        img1: {
            url: 'heading images/heading-pages-05.jpg',
            h3: {
                name:"BLOG",
            }
        },
    },
    about: {
        parametrs: {
            smallScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '60px',
                ParagFontSize: '18px',
            },
            bigScreen: {
                height: '500px',
                BgSize: '100% 100%',
                h3FontSize: '35px',
                ParagFontSize: '14px',
            }
        },
        img1: {
            url: 'heading images/heading-pages-06.jpg',
            h3: {
                name:"ABOUT",
            }
        },
    },
    contact: {
        parametrs: {
            smallScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '60px',
                ParagFontSize: '18px',
            },
            bigScreen: {
                height: '200px',
                BgSize: '100% 100%',
                h3FontSize: '35px',
                ParagFontSize: '14px',
            }
        },
        img1: {
            url: 'heading images/heading-pages-06 (1).jpg',
            h3: {
                name:"CONTACT",
            }
        },
    }
}
let Banner = function (banner) {
    this.screenSize = null;
    this.howMuchElementInArray = function (array) {
        this.count = 0;
        for (let f in array) {
            this.count++;
        }
        return this.count
    }
    this.createCarousel = function (object) {
        for (let f in object) {
            if (f != "parametrs") {
                $('.carousel-control-prev').before(`<div class="${f} carousel-item  carousel"></div>`);
                $(`.${f}`).css({
                    'position': 'relative', 'background': `url("/${object[f]['url']}") no-repeat center`,
                    'background-size': `${this.screenSize['BgSize']}`, 'height': `${this.screenSize['height']}`,
                    'z-index':'15'
                });
                $(`.${f}`).append('<div class="overlay-div"></div>')
                $(`.${f}>.overlay-div`).append('<div class="cover"></div>');
                let animationDelay = 0;
                for (let ff in object[f]) {
                    animationDelay++;
                    let anim = 'animation';
                    if (ff == 'p' || ff == 'h3') {
                        $(`.${f} .cover`).append(`<${ff} class="animated ${object[f][ff]["animation"]} delay-${anim}s">${object[f][ff]["name"]}</${ff}>`);
                    }
                }
                $(`.${f} .cover`).append(`<a href="#" class="page-button animated zoomIn delay-3s">SHOP NOW</a>`);
            }
        }
    }
    this.addActiveTag = function (className) {
        let element = $(`.${className}`).children().eq(0).addClass('active');

    }
    this.createBanner=function(object){
        for (let f in object) {
            if (f != "parametrs") {
                $('.carousel-inner').append(`<div class="${f}"></div>`);
                $(`.${f}`).css({
                    'position': 'relative', 'background': `url("/${object[f]['url']}") no-repeat center`,
                    'background-size': `${this.screenSize['BgSize']}`, 'height': `${this.screenSize['height']}`
                });
                $(`.${f}`).append('<div class="overlay-div"></div>')
                $(`.${f}>.overlay-div`).append('<div class="cover"></div>');
                let animationDelay = 0;
                for (let ff in object[f]) {
                    animationDelay++;
                    let anim = 'animation';
                    if (ff == 'p' || ff == 'h3') {
                        $(`.${f} .cover`).append(`<${ff} class="animated ${object[f][ff]["animation"]} delay-${anim}s"><u>${object[f][ff]["name"]}</u></${ff}>`);
                    }
                }
            }
        }
    }
    if ($(window).width() > 768) {
        this.screenSize = banner.parametrs.bigScreen;
    }
    else {
        this.screenSize = banner.parametrs.smallScreen;
    }
    if (this.howMuchElementInArray(banner) > 2) {

        this.createCarousel(banner);
        this.addActiveTag("carousel-inner");
    } else {

        this.createBanner(banner);
    }
}
