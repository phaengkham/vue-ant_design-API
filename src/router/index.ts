import HomeView from '../views/HomeView.vue';
import Banner from '@/views/Banner.vue';
import Mycomponent from '@/views/Mycomponent.vue';
import ShowBanner from '@/views/ShowBanner.vue';
import Supplier from '@/views/Supplier.vue';
import CreateSupplier from '@/components/supplier/Form.create.vue';
import UpdateSupplier from '@/components/supplier/Form.update.vue';
import MyBanner from '@/views/MyBanner.vue';
import CreateMyBanner from '@/components/banner/Form.create.vue';
import UpdateMyBanner from '@/components/banner/Form.update.vue';
import MyRole from '@/views/ShowRoleGuard.vue';
import { rolesGuard } from '@/common/guard/role.guard';
import { authGuard } from '@/common/guard/auth.guard';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/admin',
      component: () => import('../components/layouts/Layout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'banner',
          name: 'banner',
          component: Banner,
        },
        {
          path: 'mycomponent',
          name: 'mycomponent',
          component: Mycomponent,
        },
        {
          path: 'showbanner',
          name: 'showbanner',
          component: ShowBanner,
        },
        {
          path: 'mybanner',
          name: 'mybanner',
          component: MyBanner,
        },
        {
          path: 'myrole',
          name: 'myrole',
          component: MyRole,
          meta: {
            requiredRoles: ['admin', 'super_admin'],
          },
          beforeEnter: rolesGuard,
        },
        {
          path: 'supplier',
          name: 'supplier',
          component: Supplier,
        },
        {
          path: 'create/supplier',
          name: 'create.supplier',
          component: CreateSupplier,
        },
        {
          path: 'update/supplier/:id',
          name: 'update.supplier',
          component: UpdateSupplier,
        },
        {
          path: 'create/my-banner',
          name: 'create.my.banner',
          component: CreateMyBanner,
        },
        {
          path: 'update/my-banner/:id',
          name: 'update.my.banner',
          component: UpdateMyBanner,
          props: true,
        },
      ],
    },
  ],
});
authGuard(router);

export default router;
