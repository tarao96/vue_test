const app = Vue.createApp({
    data: function() {
        return {
            active: "",
            scrollY: 0,
            isShown: false,
            index: 0,
            items: [
                {
                    url: '#',
                    name: 'Home'
                },
                {
                    url: '#',
                    name: 'About',
                    children: [
                        {
                            url: '#',
                            name: 'About1'
                        },
                        {
                            url: '#',
                            name: 'About2'
                        },
                        {
                            url: '#',
                            name: 'About3'
                        },
                    ]
                },
                {
                    url: '#',
                    name: 'Service',
                    children: [
                        {
                            url: '#',
                            name: 'Service1'
                        },
                        {
                            url: '#',
                            name: 'Service2'
                        },
                        {
                            url: '#',
                            name: 'Service3'
                        }
                    ]
                },
                {
                    url: '#',
                    name: 'Contact'
                }
            ],
            lists: [
                {
                    id: 1,
                    name: 'list1'
                },
                {
                    id: 2,
                    name: 'list2'
                },
                {
                    id: 3,
                    name: 'list3'
                },
                {
                    id: 4,
                    name: 'list4'
                },
                {
                    id: 5,
                    name: 'list5'
                },
                {
                    id: 6,
                    name: 'list6'
                },
                {
                    id: 7,
                    name: 'list7'
                },
                {
                    id: 8,
                    name: 'list8'
                },
                {
                    id: 9,
                    name: 'list9'
                },
                {
                    id: 10,
                    name: 'list10'
                },
                {
                    id: 11,
                    name: 'list11'
                },
                {
                    id: 12,
                    name: 'list12'
                },
                {
                    id: 13,
                    name: 'list13'
                },
                {
                    id: 14,
                    name: 'list14'
                },
                {
                    id: 15,
                    name: 'list15'
                },
                {
                    id: 16,
                    name: 'list16'
                },
                {
                    id: 17,
                    name: 'list17'
                },
                {
                    id: 18,
                    name: 'list18'
                },
                {
                    id: 19,
                    name: 'list19'
                },
                {
                    id: 20,
                    name: 'list20'
                },
                {
                    id: 21,
                    name: 'list21'
                },
                {
                    id: 22,
                    name: 'list22'
                },
                {
                    id: 23,
                    name: 'list23'
                },
                {
                    id: 24,
                    name: 'list24'
                },
                {
                    id: 25,
                    name: 'list25'
                },
                {
                    id: 26,
                    name: 'list26'
                },
                {
                    id: 27,
                    name: 'list27'
                },
                {
                    id: 28,
                    name: 'list28'
                },
                {
                    id: 29,
                    name: 'list29'
                },
                {
                    id: 30,
                    name: 'list30'
                },
            ]
        }
    },
    methods: {
         dropdown(list) {
            this.active = this.active === list ? "" : list;
            console.log(this.active);
         },
         scrollList1() {
            const element = document.getElementById("list1");
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
         },
         getScroll() {
            const sectionBar = document.getElementById("section_bar");
            this.scrollY = window.scrollY;
            // const pageHeight = document.documentElement.clientHeight;
            const winScrollMaxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            sectionBar.style.height = ((this.scrollY / winScrollMaxY) * 100) + '%';
         },
         getWinHeight() {
            const sectionBar = document.getElementById("section_bar");
            // const pageHeight = document.documentElement.clientHeight;
            const winHeight = document.body.clientHeight;
            const headerHeight = document.getElementById("header").clientHeight;
            console.log(winHeight - headerHeight);
            sectionBar.style.maxHeight = winHeight - headerHeight;
         },
         setSectionBar() {
            const sectionBar = document.getElementById("section_bar");
            const headerHeight = document.getElementById("header").clientHeight;
            sectionBar.style.top = headerHeight;
         },
         slideshow(images) {
            const current = images[this.index];
            const prev = images[this.index - 1] ? images[this.index - 1] : images[images.length - 1];
            // const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );
            // await sleep(8000);
            current.classList.add('fadein');
            current.classList.remove('fadeout');
            prev.classList.remove('fadein');
            prev.classList.add('fadeout');
          }
    },
    mounted() {
        window.addEventListener("scroll", this.getScroll);
        this.getWinHeight();
        this.setSectionBar();
        
        d3.selectAll("p").style("color", "red");

        const images = document.getElementsByClassName('slideshow');
        this.slideshow(images);
        setInterval(() => {
            this.index = this.index < images.length - 1 ? this.index + 1 : 0;
            this.slideshow(images);
        }, 10000);

        // 以下は六角ビニング
        // var svg = d3.select("svg"),
        // margin = {top: 20, right: 20, bottom: 30, left: 40},
        // width = +svg.attr("width") - margin.left - margin.right,
        // height = +svg.attr("height") - margin.top - margin.bottom,
        // g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // var randomX = d3.randomNormal(width / 2, 80),
        //     randomY = d3.randomNormal(height / 2, 80),
        //     points = d3.range(10).map(function() { return [randomX(), randomY()]; });

        // var color = d3.scaleSequential(d3.interpolateLab("white", "steelblue"))
        //     .domain([0, 20]);

        // var hexbin = d3.hexbin()
        //     .radius(20)
        //     .extent([[0, 0], [width, height]]);


        // g.append("clipPath")
        //     .attr("id", "clip")
        // .append("rect")
        //     .attr("width", width)
        //     .attr("height", height);

        // g.append("g")
        //     .attr("class", "hexagon")
        //     .attr("clip-path", "url(#clip)")
        // .selectAll("path")
        // .data(hexbin(points))
        // .enter().append("path")
        //     .attr("d", hexbin.hexagon())
        //     .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
        //     .attr("fill", function(d) { return color(d.length); });

        // g.append("g")
        //     .attr("class", "axis axis--y")
        //     .call(d3.axisLeft(y).tickSizeOuter(-width));

        // g.append("g")
        //     .attr("class", "axis axis--x")
        //     .attr("transform", "translate(0," + height + ")")
        //     .call(d3.axisBottom(x).tickSizeOuter(-height));
    },
    watch: {
        isShown: function(next) {
            setTimeout(() => {
            this.isShown = false
        }, 2000)
    }
    }
});

app.mount('#app')