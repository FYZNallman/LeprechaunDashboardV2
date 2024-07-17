export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/pages/account/login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/pages/account/register.vue'),
    },
    {
        path: '/forgot-password',
        name: 'Forgot-password',
        component: () => import('../views/pages/account/forgot-password.vue'),
    },
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/pages/dashboard/index.vue'),
    },
    {
        path: '/livechart',
        name: 'LiveChart',
        component: () => import('../views/pages/dashboard/LiveChart.vue'),
    },
    {
        path: '/swap',
        name: 'Swap',
        component: () => import('../views/pages/dashboard/swap.vue'),
    },
    {
        path: '/wallet',
        name: 'Wallet',
        component: () => import('../views/pages/dashboard/wallet.vue'),
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('../views/pages/dashboard/news.vue'),
    },
    {
        path: '/ecommerce/orders',
        name: 'Orders',
        component: () => import('../views/pages/ecommerce/orders.vue'),
    },
    {
        path: '/ecommerce/customers',
        name: 'Customers',
        component: () => import('../views/pages/ecommerce/customers.vue'),
    },
    {
        path: '/ecommerce/cart',
        name: 'Cart',
        component: () => import('../views/pages/ecommerce/cart.vue'),
    },
    {
        path: '/ecommerce/checkout',
        name: 'Checkout',
        component: () => import('../views/pages/ecommerce/checkout.vue'),
    },
    {
        path: '/ecommerce/shops',
        name: 'Shops',
        component: () => import('../views/pages/ecommerce/shops.vue'),
    },
    {
        path: '/ecommerce/add-product',
        name: 'Add-product',
        component: () => import('../views/pages/ecommerce/add-product.vue'),
    },
    {
        path: '/email/inbox',
        name: 'Inbox',
        component: () => import('../views/pages/email/inbox.vue'),
    },
    {
        path: '/email/read',
        name: 'Read Email',
        component: () => import('../views/pages/email/reademail.vue'),
    },
    {
        path: '/auth/login-1',
        name: 'login-1',
        component: () => import('../views/pages/sample-auth/login-1.vue'),
    },
    {
        path: '/auth/register-1',
        name: 'register-1',
        component: () => import('../views/pages/sample-auth/register-1.vue'),
    },
    {
        path: '/auth/lock-screen-1',
        name: 'Lock Screen',
        component: () => import('../views/pages/sample-auth/lock-screen-1.vue'),
    },
    {
        path: '/auth/recoverpwd-1',
        name: 'Recover Password',
        component: () => import('../views/pages/sample-auth/recoverpwd-1.vue'),
    },
    {
        path: '/apps/kanban-board',
        name: 'Kanban Board',
        component: () => import('../views/pages/kanbanboard/index.vue'),
    },
    {
        path: '/pages/starter',
        name: 'Starter Page',
        component: () => import('../views/pages/utility/starter.vue'),
    },
    {
        path: '/pages/maintenance',
        name: 'Maintenance',
        component: () => import('../views/pages/utility/maintenance.vue'),
    },
    {
        path: '/pages/coming-soon',
        name: 'Coming-soon',
        component: () => import('../views/pages/utility/coming-soon.vue'),
    },
    {
        path: '/pages/timeline',
        name: 'Timeline',
        component: () => import('../views/pages/utility/timeline/index.vue'),
    },
    {
        path: '/pages/faqs',
        name: 'Faqs',
        component: () => import('../views/pages/utility/faqs.vue'),
    },
    {
        path: '/pages/pricing',
        name: 'Pricing',
        component: () => import('../views/pages/utility/pricing/index.vue'),
    },
    {
        path: '/pages/error-404',
        name: 'Error 404',
        component: () => import('../views/pages/utility/error-404.vue'),
    },
    {
        path: '/pages/error-500',
        name: 'Error 500',
        component: () => import('../views/pages/utility/error-500.vue'),
    },
    {
        path: '/icons/font-awesome',
        name: 'Font Awesome 5',
        component: () => import('../views/pages/icons/font-awesome/index.vue'),
    },
    {
        path: '/icons/dripicons',
        name: 'Dripicons',
        component: () => import('../views/pages/icons/dripicons.vue'),
    },
    {
        path: '/icons/material-design',
        name: 'Material Design',
        component: () => import('../views/pages/icons/materialdesign/index.vue'),
    },
    {
        path: '/icons/remix',
        name: 'Remix Icons',
        component: () => import('../views/pages/icons/remix/index.vue'),
    },
    {
        path: '/ui/buttons',
        name: 'Buttons',
        component: () => import('../views/pages/ui/buttons.vue'),
    },
    {
        path: '/ui/alerts',
        name: 'Alerts',
        component: () => import('../views/pages/ui/alerts.vue'),
    },
    {
        path: '/ui/grid',
        name: 'Grid',
        component: () => import('../views/pages/ui/grid.vue'),
    },
    {
        path: '/ui/cards',
        name: 'Cards',
        component: () => import('../views/pages/ui/cards.vue'),
    },
    {
        path: '/ui/carousel',
        name: 'Carousel',
        component: () => import('../views/pages/ui/carousel.vue'),
    },
    {
        path: '/ui/dropdowns',
        name: 'Dropdowns',
        component: () => import('../views/pages/ui/dropdowns.vue'),
    },
    {
        path: '/ui/images',
        name: 'Images',
        component: () => import('../views/pages/ui/images.vue'),
    },
    {
        path: '/ui/modals',
        name: 'Modals',
        component: () => import('../views/pages/ui/modals.vue'),
    },
    {
        path: '/ui/rangeslider',
        name: 'Range Slider',
        component: () => import('../views/pages/ui/rangeslider.vue'),
    },
    {
        path: '/ui/progressbar',
        name: 'Progressbar',
        component: () => import('../views/pages/ui/progressbars.vue'),
    },
    {
        path: '/ui/sweet-alert',
        name: 'Sweet Alert',
        component: () => import('../views/pages/ui/sweet-alert.vue'),
    },
    {
        path: '/ui/tabs-accordion',
        name: 'Tabs & Accordion',
        component: () => import('../views/pages/ui/tabs-accordions.vue'),
    },
    {
        path: '/ui/typography',
        name: 'Typography',
        component: () => import('../views/pages/ui/typography.vue'),
    },
    {
        path: '/ui/video',
        name: 'Video',
        component: () => import('../views/pages/ui/video.vue'),
    },
    {
        path: '/ui/general',
        name: 'General',
        component: () => import('../views/pages/ui/general.vue'),
    },
    {
        path: '/ui/lightbox',
        name: 'Lightbox',
        component: () => import('../views/pages/ui/lightbox.vue'),
    },
    {
        path: '/ui/notification',
        name: 'Notification',
        component: () => import('../views/pages/ui/notification.vue'),
    },
    {
        path: '/ui/session-timeout',
        name: 'Session Timeout',
        component: () => import('../views/pages/ui/session-timeout.vue'),
    },
    {
        path: '/form/elements',
        name: 'Form Elements',
        component: () => import('../views/pages/forms/elements.vue'),
    },
    {
        path: '/form/validation',
        name: 'Form validation',
        component: () => import('../views/pages/forms/validation.vue'),
    },
    {
        path: '/form/advanced',
        name: 'Form Advanced',
        component: () => import('../views/pages/forms/advanced.vue'),
    },
    {
        path: '/form/editor',
        name: 'CK Editor',
        component: () => import('../views/pages/forms/ckeditor.vue'),
    },
    {
        path: '/form/uploads',
        name: 'File Uploads',
        component: () => import('../views/pages/forms/uploads.vue'),
    },
    {
        path: '/form/wizard',
        name: 'Form Wizard',
        component: () => import('../views/pages/forms/wizard.vue'),
    },
    {
        path: '/form/mask',
        name: 'Form Mask',
        component: () => import('../views/pages/forms/mask.vue'),
    },
    {
        path: '/tables/basic',
        name: 'Basic Tables',
        component: () => import('../views/pages/tables/basictable.vue'),
    },
    {
        path: '/tables/advanced',
        name: 'Advanced Tables',
        component: () => import('../views/pages/tables/advancedtable.vue'),
    },
    {
        path: '/charts/apex',
        name: 'Apex chart',
        component: () => import('../views/pages/charts/apex.vue'),
    },
    {
        path: '/charts/echart',
        name: 'Echart chart',
        component: () => import('../views/pages/charts/echart/index.vue'),
    },
    {
        path: '/maps/google',
        name: 'Google Maps',
        component: () => import('../views/pages/maps/google.vue'),
    },
];
