<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar app color="primary" dark height="40">
      <div class="d-flex align-center">
        <span class="mr-2 title">簡易ファイル名作成補助ツール</span>
      </div>

      <v-spacer></v-spacer>

      <v-dialog>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-history</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title>履歴</v-card-title>
          <v-divider class="my-1"></v-divider>
          <v-card-text height="200px">

            <li v-for="history in history" :key="history" >
              <v-btn
                  depressed
                  v-clipboard:copy='history'
                  v-clipboard:success="copySuccess"
              >
                {{ history }}
              </v-btn>
              <v-divider class="my-1"></v-divider>
            </li>

          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-help-circle</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title>使い方</v-card-title>
          <v-divider></v-divider>
          <v-card-text height="200px">
            <span v-html="how2use()"></span>
            <br><br>
            <template>
              <b>新聞名対応表 </b>
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left">
                      新聞名称
                    </th>
                    <th class="text-left">
                      記号
                    </th>
                    <th class="text-left">
                      略記
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="newspaper_list in newspaper_list"
                      :key="newspaper_list.name"
                  >
                    <td>{{ newspaper_list.name }}</td>
                    <td>{{ newspaper_list.symbol }}</td>
                    <td>{{ newspaper_list.abbreviation }}</td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-card-text>
        </v-card>
      </v-dialog>

      <template>
        <v-btn @click="switchDarkMode" icon>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </template>
      
    </v-app-bar>

    <template>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        コピーしました
      </v-snackbar>
    </template>

    <v-main>
      <HelloWorld @HistoryData="getHistory"/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

// import Vue from 'vue';

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data() {
    return {
      snackbar: false,
      timeout: 1000,

      dialog: false,

      how2use: () => {
        return (function (param) {
          return param[0].replace(/[\n\r]/g, "");
        })`
          Tabキーで次のテキスト欄(チェックボックス、ボタン)にカーソルを移動できます。<br>
          <b>うまくコピーできない場合、新聞名、朝夕、日付の欄に正しい値を入力できているか確認してください</b><br><br>
          <b>新聞名、朝夕、日付の欄</b><br>
          新聞名の記号、朝,夕,不明(a,y,n)、日付(西暦+月+日、6桁か8桁で)をスペースを空けずに入力<br>
          ただし、大阪日日新聞、朝日ファミリー、掲載紙不明はそれぞれo,f,kと入力<br>
          例えばA\`94,3,24と書かれていたらay940324と入力<br>
          <b>IE未対応</b>`;
      },

      history: [],

      newspaper_list: [
        {name: "朝日新聞", symbol: "A", abbreviation: "【朝日】"},
        {name: "読売新聞", symbol: "Y", abbreviation: "【読売】"},
        {name: "毎日新聞 ", symbol: "M", abbreviation: "【毎日】"},
        {name: "産経新聞", symbol: "S", abbreviation: "【産経】"},
        {name: "大阪日日新聞", symbol: "(O)", abbreviation: "【大日】"},
        {name: "朝日ファミリー", symbol: "(F)", abbreviation: "【ファミリー】"},
        {name: "(掲載紙不明)", symbol: "(K)", abbreviation: "【掲載紙不明】"},

      ]
    }
  },

  methods: {
    switchDarkMode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    getHistory(history) {
      this.history = history;
    },
    copySuccess(){
      this.snackbar = true;
    }
      // console.log(event.target.textContent)
  },

  computed: {
      theme() {
        return this.$vuetify.theme.dark ? "dark" : "light";
      },

  },
};
</script>
