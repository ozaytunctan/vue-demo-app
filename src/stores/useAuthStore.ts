import {defineStore} from "pinia";
import router from "@/router";

const STORE_USER_NAME: string = "USER";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => {
        let user: { username: string, token: string } | any = localStorage.getItem("user");
        if (user != null) {
            user = JSON.parse(user);
        }
        return {
            username: user ? user.username : '',
            token: user ? user.token : '',
            returnUrl: '/'
        }
    },

    getters: {
        isAuthenticated(): boolean {
            return this.username != '' && this.token != '';
        },
        getLoggedInUser(): { username: string, token: string } | any {
            let user: { username: string, token: string } | any = localStorage.getItem("user");
            if (user != null) {
                user = JSON.parse(user);
            }
            return user;
        },
    },

    actions: {
        async login(username: string, password: string) {
            // const response = await fetch('http://localhost:8080', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({username, password})
            // });
            // console.log(response.status);
            // console.log(response.text());

            // if (response.status == 200) {
            //     const token = await response.text();
            //     this.username = username;
            //     this.token = token;
            //     router.push(this.returnUrl);
            // } else {
            //     new Error("Giriş yapılamadı");
            // }

            if (username == 'ozay' && password == '1234') {
                this.username = username;
                this.token = "154646 - 646464 - 56446456546 - 64654646";
                await this.setLoggedInUser(this.username, this.token);

            } else {
                throw new Error("Invalid credentials");
            }
        },
        async doLogout() {
            this.username = '';
            this.token = '';
            localStorage.removeItem(STORE_USER_NAME);
            router.push('/login');
        },
        setLoggedInUser(username: string, token: string) {
            this.username = username;
            this.token = token;
            const user = {
                username: username,
                token: this.token
            };
            localStorage.setItem(STORE_USER_NAME, JSON.stringify(user));
            router.push(this.returnUrl);
        }
    },

})