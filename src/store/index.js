import { createStore } from 'vuex'

export default createStore({
  state: {//状態管理 データの保存内容
    count : 0, 
    memos : []
  },
  getters: {//storeの内容を取得
    getCount: (state) => {
      return state.memos.length
    },
    getAll : (state) => {
      return state.memos
    },
    getMeomId : (state) => (id) =>  {
      return state.memos.find( memo => memo.id === id)
    }
  },
  mutations: {//stateの内容を変更、保存
    save(state,newMemo){//メモを保存する
      newMemo.id = ++state.count
      state.memos.unshift(newMemo)
    }
  },
  actions: {// 非同期通信
  },
  modules: {// stateを定義、モジュール化
  }
})
