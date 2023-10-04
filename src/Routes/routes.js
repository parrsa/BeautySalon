import MainLayoput from '../Pages/MainLayout/mainlayout'
import More from '../Pages/MorePage/Mores'
let router = [
    { path: '/', element: <MainLayoput /> },
    { path: '/services/:id', element: <More /> },
]
export default router