(function (angular) {
    var MEMBERS = [
        {
            id: 1,
            name: "おじいちゃん",
            description: "フロントエンドエンジニアのおじいちゃんと言います。本当は24歳です。よろしくお願いします。"
        },
        {
            id: 2,
            name: "はやち",
            description: "フロントエンドエンジニアのはやちです( ˘ω˘)☝以前までは顔隠しておりましたが思い切ることにしました…。相変わらず顔文字乱舞ですがブログもコーディングも楽しくやっていこうと思います✌(´ʘ‿ʘ｀)✌Androidの方は相変わらず文字化けすいません(◞‸◟)"
        },
        {
            id: 3,
            name: "先生",
            description: "フロントエンドエンジニアの林です。業務効率化するアプリが大好き。AngularJS好きのJavaScripter。ディレクション・サーバーサイド開発・デザインにもぐいぐい入り込んでいきます。あとテニスが好きです。"
        },
        {
            id: 4,
            name: "せいと",
            description: "最近フロントエンドエンジニアになりました。第一回HTML5カルタ大会で優勝しました。休日の過ごし方は、\"Jazz Barでスコッチを片手に『世界の終りとハードボイルド・ワンダーランド』を読む\"です。"
        },
        {
            id: 5,
            name: "まろC",
            description: "フロントエンドエンジニアのまろCです。最近はAWSもやってCMSも構築して、手タレもやっています。"
        },
        {
            id: 6,
            name: "いなば",
            description: "フロントエンドエンジニアの稲葉です。Web制作→ソーシャルゲーム開発を経てまたWeb制作に戻ってきました。趣味はランニングと一眼レフです。TRIPに続くWebサービスの立ち上げに参加する事と東京マラソン出場＆完走が密かな目標です。"
        },
        {
            id: 7,
            name: "店長",
            description: "ロントエンドエンジニアの店長です。LIGに入社と同時に店長（あだ名が）になりました。偉くはありません。以前、某カフェで働いていました。音楽とコーヒーが大好きです。よろしくお願いいたします。"
        }
    ];
    angular.module('app', ['ngAnimate', 'ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('/', {
                    url: "/",
                    controller: 'HomeController as home',
                    templateUrl: "home.html"
                }).state('profile', {
                    url: '/profile/:id',
                    templateUrl: 'profile.html',
                    controller: 'ProfileController as profile'
                });
        }])
        .controller('HomeController', [function () {
            this.members = MEMBERS;
        }])
        .controller('ProfileController', ['$stateParams', function ($stateParams) {
            var index = parseInt($stateParams.id, 10);
            this.member = MEMBERS[index - 1];
        }]);

})(angular);