export const FOOTERNAVMENU = [
    {
    h1: 'Банк',
    a:[{
        name:'Дебетовые карты',
        path:'/#card'
    },
    {
        name:'Кредитные карты',
        path:'/#card'
    },
    {
        name:'Кредит',
        path:'/credit#any-loan'
    },
    {
        name:'Ипотека',
        path:'/credit#mortgage-loan'
    },
    {
        name:'Автокредит',
        path:'/credit#auto-loan'
    },
    {
        name:'Образовательный кредит',
        path:'/credit#education-loan'
    },
    ]},
    {
    h1: 'Инвестиции',
    a:[{
        name:'Брокерский счёт',
        path:'/invest#account-open'
    },
    {
        name:'Акции',
        path:'/invest#stocks'
    },    
    ]},
        {
    h1: 'Малый бизнес',
    a:[
    {
        name:'Регистрация ИП',
        path:'/business#business-open'
    },
    {
        name:'Регистрация ООО',
        path:'/business#business-open'
    },
    {
        name:'Кредит для предприятия',
        path:'/business#loan'
    },
    {
        name:'Лизинг',
        path:'/business#leasing'
    },
    
    ]},
        {
    h1: 'Средний и крупный бизнес',
    a:[
    {
        name:'Кредит на большое производство',
        path:'/business#loan'
    },
    {
        name:'Торговый эквайринг',
        path:'/business#acquiring'
    },
    {
        name:'Госзакупки',
        path:'/business#public-procurement'
    },
    {
        name:'Лизинг',
        path:'/business#leasing'
    },
    ]}
]
export const HEADERNAVMENU = [
    {
        id:"Частным лицам",
        title:"Частным лицам",
        route:"/"
    },
    {
        id:"Бизнесу",
        title:"Бизнесу",
        route:"/business"
    },
    {
        id:"Инвестиции",
        title:"Инвестиции",
        route:"/invest"
    },
    {
        id:"Кредит",
        title:"Кредит",
        route:"/credit"
    }
]

export  const CARDS = [
        {
            blockID:0, 
            h1:'Кредитная карта',
            bigCardImg:'/img/CreditBigCard01.avif', 
            p:
            <div>
                <p>Беспроцентный период до 1 года</p>
                <p>До 1 миллиона</p>
                <p>Быстрое оформление</p>
                <p>120 дней до погашения</p>
            </div>,
            chooseStyle: "выбери свой дизайн",
            images:[
                {id:'CreditChangeButton01',src:'/img/CreditChangeButton01.jpg', srcBigCard:'/img/CreditBigCard01.avif'},
                {id:'CreditChangeButton02',src:'/img/CreditChangeButton02.jpg', srcBigCard:'/img/CreditBigCard02.avif'},
            ]
        },
        {
            blockID:1,
            h1:'Дебетовая карта',
            bigCardImg:'/img/DebetBigCard01.avif', 
            p:
            <div>
                <p>Бесплатное обслуживание</p>
                <p>Переводы без комиссии до 10 миллионов</p>
                <p>Овердрафт до 30 дней</p>
                <p>Кэшбэк на покупки до 20%</p>
            </div>,
            chooseStyle: "выбери свой дизайн",
            images:[
                {id:'DebetChangeButton01',src:'/img/DebetChangeButton01.jpg', srcBigCard:'/img/DebetBigCard01.avif'},
                {id:'DebetChangeButton02',src:'/img/DebetChangeButton02.jpg', srcBigCard:'/img/DebetBigCard02.avif'},
                {id:'DebetChangeButton03',src:'/img/DebetChangeButton03.jpg', srcBigCard:'/img/DebetBigCard03.avif'},
                {id:'DebetChangeButton04',src:'/img/DebetChangeButton04.jpg', srcBigCard:'/img/DebetBigCard04.avif'},
                {id:'DebetChangeButton05',src:'/img/DebetChangeButton05.jpg', srcBigCard:'/img/DebetBigCard05.avif'},
            ]
        },
]

export const STOCKS = [
        {
            code:"GAZP",
            title:"Газпром",
            value:"121,9",
            icon:"/img/GAZPStockIcon.svg",
            url:"",
        },
        {
            code:"YDEX",
            title:"Яндекс",
            value:"3927,5",
            icon:"/img/YandexStockIcon.svg",
            url:"",
        },
        {
            code:"SBER",
            title:"Сбер Банк",
            value:"300,24",
            icon:"/img/SBERStockIcon.svg",
            url:"",
        },
        {
            code:"ROSN",
            title:"Роснефть",
            value:"388,9",
            icon:"/img/ROSNStockIcon.svg",
            url:"",
        },
        {
            code:"VTBR",
            title:"Банк ВТБ",
            value:"69",
            icon:"/img/VTBStockIcon.svg",
            url:"",
        },
        {
            code:"LKOH",
            title:"Лукойл",
            value:"5062",
            icon:"/img/LKOHStockIcon.svg",
            url:"",
        },{
            code:"GAZP",
            title:"Газпром",
            value:"121,9",
            icon:"/img/GAZPStockIcon.svg",
            url:"",
        },
        {
            code:"YDEX",
            title:"Яндекс",
            value:"3927,5",
            icon:"/img/YandexStockIcon.svg",
            url:"",
        },
        {
            code:"SBER",
            title:"Сбер Банк",
            value:"300,24",
            icon:"/img/SBERStockIcon.svg",
            url:"",
        },
        {
            code:"ROSN",
            title:"Роснефть",
            value:"388,9",
            icon:"/img/ROSNStockIcon.svg",
            url:"",
        },
        {
            code:"VTBR",
            title:"Банк ВТБ",
            value:"69",
            icon:"/img/VTBStockIcon.svg",
            url:"",
        },
        {
            code:"LKOH",
            title:"Лукойл",
            value:"5062",
            icon:"/img/LKOHStockIcon.svg",
            url:"",
        },{
            code:"GAZP",
            title:"Газпром",
            value:"121,9",
            icon:"/img/GAZPStockIcon.svg",
            url:"",
        },
        {
            code:"YDEX",
            title:"Яндекс",
            value:"3927,5",
            icon:"/img/YandexStockIcon.svg",
            url:"",
        },
        {
            code:"SBER",
            title:"Сбер Банк",
            value:"300,24",
            icon:"/img/SBERStockIcon.svg",
            url:"",
        },
        {
            code:"ROSN",
            title:"Роснефть",
            value:"388,9",
            icon:"/img/ROSNStockIcon.svg",
            url:"",
        },
        {
            code:"VTBR",
            title:"Банк ВТБ",
            value:"69",
            icon:"/img/VTBStockIcon.svg",
            url:"",
        },
        {
            code:"LKOH",
            title:"Лукойл",
            value:"5062",
            icon:"/img/LKOHStockIcon.svg",
            url:"",
        },
    ]

export const LoanPeriodOptions = [
        {
            title:"1 год",
            value:1 ,
        },
        {
            title:"2 года",
            value:2 ,
        },
        {
            title:"3 года",
            value:3 ,
        },
        {
            title:"4 года",
            value:4 ,
        },
        {
            title:"5 лет",
            value:5 ,
        },
        {
            title:"6 лет",
            value:6 ,
        },
        {
            title:"7 лет",
            value:7 ,
        },
        {
            title:"8 лет",
            value:8 ,
        },
        {
            title:"9 лет",
            value:9 ,
        },
        {
            title:"10 лет",
            value:10 ,
        },
        {
            title:"11 лет",
            value:11 ,
        },
        {
            title:"12 лет",
            value:12 ,
        },
        {
            title:"13 лет",
            value:13 ,
        },
        {
            title:"14 лет",
            value:14,
        },
        {
            title:"15 лет",
            value:15,
        },
    ]

export const LoanReasonOptions = [
    {
        title:"Для покупки автомобиля",
            value:"auto",
        },
        {
            title:"Для покупки недвижимости",
            value:"house",
        },
        {
            title:"Для образования",            
            value:"education",
        },
        {
            title:"Другое",
            value:"any",
        },
    ]