import config from '~/config'
import Home from '~/pages/Home';
import Introduce from '~/pages/Introduce';
import Product from '~/pages/Product';
import News from '~/pages/News';
import Contact from '~/pages/Contact';
import Find from '~/pages/Find';
import Cart from '~/pages/Cart';

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.introduce, component: Introduce, layout: null},
    {path: config.routes.product, component: Product},
    {path: config.routes.find, component: Find},
    {path: config.routes.news, component: News},
    {path: config.routes.contact, component: Contact, layout: null},
    {path: config.routes.cart, component: Cart, layout: null}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }

