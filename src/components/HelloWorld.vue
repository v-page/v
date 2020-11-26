<template>
  <v-container>
    <v-container class="pa-0" fluid>
      <span class="">分野</span>
      <v-col cols="12" class="pa-0 mt-2">
<!--        <v-btn-toggle-->
<!--            class="mt-n1"-->

<!--            :style="{ background: $vuetify.theme.themes[theme].background }"-->
<!--          >-->
        <v-row>
            <v-checkbox
              v-for="volunteerType in volunteerType"
              :label="volunteerType.value"
              :value="volunteerType.value"
              v-model="SelectedVolunteerType"
              :key="volunteerType.id"
              class="mx-2 my-n3"
            ></v-checkbox>
        </v-row>
<!--        </v-btn-toggle>-->
      </v-col>
    </v-container>
    <!--    </template>-->

    <v-text-field
      label="新聞名、朝夕、日付"
      placeholder="ay940324"
      class="pa-0 mb-n1"
      outlined
      v-model="dateDATA"
    ></v-text-field>

    <v-text-field
      label="タイトル"
      placeholder="障害者が働ける場を 福祉の会 明日設立"
      class="pa-0 my-n2"
      outlined
      v-model="title"
    ></v-text-field>

    <v-text-field
      label="キーワード"
      placeholder="社会福祉・自立推進研究会、堀内進一、清水哲"
      class="pa-0 my-n2"
      outlined
      v-model="keywords"
    ></v-text-field>

    <v-checkbox
        class="pa-0 my-n2"
        label="大阪ボランティア協会"
        v-model="isOsaka"
    ></v-checkbox>

    <v-btn
      class="mx-1"
      color="info"
      @click="CheckStr"
      v-clipboard:copy="this.copy"
      v-clipboard:success="this.copySuccess"
      v-clipboard:error="this.copyFail"
    >
      <v-icon left> mdi-content-copy </v-icon>
      コピー
    </v-btn>

    <v-btn class="mx-1" color="error" @click="reset">
      <v-icon left> mdi-delete </v-icon>
      リセット
    </v-btn>

      <template>
          <v-snackbar v-model="snackbar" :timeout="timeout">
            コピーしました
          </v-snackbar>

          <v-snackbar v-model="copyErr" :timeout="timeout">
            クリップボードアクセスエラー！
          </v-snackbar>

          <v-snackbar v-model="inputErr" :timeout="timeout">
            新聞名、朝夕、日付の欄に誤りがあります
          </v-snackbar>

          <v-snackbar v-model="typeNoInput" :timeout="timeout">
            分野未入力です
          </v-snackbar>
      </template>
  </v-container>
</template>

<script>

export default {
  name: "HelloWorld",

  data: () => ({
    dateDATA:"",
    title: "",
    keywords: "",
    type: false,
    isOsaka: false,
    SelectedVolunteerType:[],

    snackbar: false,
    copyErr: false,
    inputErr: false,
    typeNoInput: false,
    timeout: 1000,

    volunteerType: [
      {id: 0, value: "保健"},
      {id: 1, value: "医療"},
      {id: 2, value: "福祉"},
      {id: 3, value: "まち"},
      {id: 4, value: "芸術"},
      {id: 5, value: "スポ"},
      {id: 6, value: "環境"},
      {id: 7, value: "動物"},
      {id: 8, value: "災害"},
      {id: 9, value: "人権"},
      {id: 10, value: "平和"},
      {id: 11, value: "国際"},
      {id: 12, value: "男女"},
      {id: 13, value: "こども"},
      {id: 14, value: "社会教育"},
      {id: 15, value: "情報"},
      {id: 16, value: "政治"},
      {id: 17, value: "消費者"},
      {id: 18, value: "経済"},
      {id: 19, value: "活動支援"},
      {id: 20, value: "企業"},
      {id: 21, value: "その他"},
    ],
    radioGroup: 1,


    PubIDList:"AYMSNOFK",
    MorningOrEveningList:"AYN",
    DateStrRegExp:"(\\d{6}|\\d{8})",

    history:[],
      }),

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    InputCheckRegExp(){
      // console.log(`^[${this.PubIDList}][${this.MorningOrEveningList}]${this.DateStrRegExp}$`)
      return new RegExp(`^[${this.PubIDList}][${this.MorningOrEveningList}]${this.DateStrRegExp}$`)
    },
    copy() {
      let dateDATA_Normalized = this.Normalize(this.dateDATA)
      if(!this.InputCheckRegExp.test(dateDATA_Normalized) || this.SelectedVolunteerType.length === 0){
        return undefined;
      }

      let Publisher = (()=>{
          let PubRegExp = new RegExp(`^[${this.PubIDList}]`)
          const PubID = dateDATA_Normalized.match(PubRegExp)[0]
          switch(PubID){
            case "A":
              return "【朝日】"
            case "Y" :
              return "【読売】"
            case "M" :
              return "【毎日】"
            case "S":
              return "【産経】"
            case "N":
              return "【日経】"
            case "O":
              return "【大日】"
            case "F":
              return "【ファミリー】"
            case "K":
              return "【掲載紙不明】"
          }
      })()

      let MorningOrEvening = (()=>{
        let MorE_RegExp = new RegExp(`(?<=[${this.PubIDList}])[${this.MorningOrEveningList}]`)
        const MorningOrEvening_id = dateDATA_Normalized.match(MorE_RegExp)[0]
        switch(MorningOrEvening_id){
          case "A":
            return "朝刊"
          case "Y":
            return "夕刊"
          case "N":
          default:
            return ""
        }

      })()

      let date = (()=>{
        let dateRegExp = new RegExp(`${this.DateStrRegExp}$`)
        let date_id = dateDATA_Normalized.match(dateRegExp)[0]

        if(date_id.length === 6){
          const ArticleYear = (()=>{
            return date_id.match(/^\d{2}/)[0]
          })()

          const nowYear = (()=>{
            return String(new Date().getFullYear()).match(/\d{2}$/)[0]
          })()

          //例 (19)42年 > (20)20年 , (20)12年 > (20)20年
          if(Number(ArticleYear) > Number(nowYear)){
            return `19${date_id}`
          }else{
            return `20${date_id}`
          }

        }else if(date_id.length === 8){
          return date_id
        }
        })()



      let isOsakaArticle = (this.isOsaka)? "<大阪ボランティア協会>" : ""
      //19940320福祉【読売】朝刊「障害者が働ける場を 福祉の会 明日設立」社会福祉・自立推進研究会、堀内進一、清水哲.pdf
      return `${date}${this.SelectedVolunteerType.join(" ")}${Publisher}${MorningOrEvening}「${this.title}」${this.keywords}${isOsakaArticle}`;
    },
  },

  methods: {
    reset(){
      this.dateDATA = ""
      this.title = ""
      this.keywords = ""
      this.SelectedVolunteerType =  []
      this.isOsaka = false
    },

    CheckStr(){
     if(!this.InputCheckRegExp.test(this.Normalize(this.dateDATA))){
       this.inputErr = true
     }else if(this.SelectedVolunteerType.length === 0){
       this.typeNoInput = true
     }
    },

    Normalize(str){
      function hankaku2Zenkaku(str) {
        return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
      }
      return hankaku2Zenkaku(str).toUpperCase()
    },

    copySuccess(){
      this.history.unshift(this.copy)
      this.$emit('HistoryData', this.history);
      // console.log(this.history)
      this.snackbar = true;
      this.reset()
    },

    copyFail(){
      this.copyErr = true;
    }

  },



};
</script>
