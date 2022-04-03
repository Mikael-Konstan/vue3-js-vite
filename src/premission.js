import router from './router'
import nprogress from 'nprogress'
import setPageTitle from './utils/setPageTitle'
import { getToken } from './utils/auth'
import 'nprogress/nprogress.css'

nprogress.configure({ showSpinner: false})

const whiteRouter = [];

router.beforeEach((to, form) => {
    nprogress.start();
    document.title = setPageTitle(to.meta.title);
    const hasToken = getToken();

    if (hasToken) {
        if (to.path !== '/login') {
            const getRoles = store.getters.getRoles;
            if (!getRoles) { // 没有添加过路由
                const accessRoutes = await store.dispatch('permission/grtRoutes', hasToken);
                router.addRoute(accessRoutes);
            }
        }
        return nprogress.done();
    } else {
        if (!whiteRouter.includes(to.path)) {
            return router.push({
                path: '/login',
                params: {
                    redirect: to.path,
                }
            });
        }
        return nprogress.done();
    }
})
