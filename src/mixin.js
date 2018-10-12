import isString from 'lodash/fp/isString';
import * as api from '@/api';

export default {
  data() {
    return {
      // список книг
      listOfBook: [],
      // ссылка для получения следующего блока данных
      nextUrl: '',
      // ошибка работы с апи
      error: null,
      // статус прелодера данных
      busy: true,
    };
  },
  methods: {
    loadingStart() {
      this.busy = true;
    },
    loadingEnd() {
      this.busy = false;
    },
    nextGetList() {
      this.loadingStart();
      api
        .next(this.nextUrl)
        .then(this.catchResponse)
        .catch(this.catchErrors);
    },
    catchResponse(response) {
      this.listOfBook = this.listOfBook.concat(response.objects);
      if (response.has_next === true) {
        if (process.env.NODE_ENV === 'development') {
          this.nextUrl = response.next
            .replace(process.env.VUE_APP_DOMAIN_REAL, process.env.VUE_APP_DOMAIN_TEST);
        } else {
          this.nextUrl = response.next;
        }
      } else {
        this.nextUrl = '';
      }
      this.loadingEnd();
      return true;
    },
    catchErrors(error) {
      this.error = isString(error) ? error : 'ошибка при работе с сервером';
      return false;
    },
  },
  created() {
    // используем якорь из урл для инициализации сортировки списка
    if (this.$route.hash !== '') {
      const hashStr = this.$route.hash;
      this.direction = !hashStr.indexOf('-') === 1;
      this.sort = hashStr.replace(`#${this.direction ? '' : '-'}`, '');
    }
    // инициализируем список книг
    this.firstGetList();
  },
};
