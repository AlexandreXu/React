import Footer from "../../components/Footer/Footer";

const LayoutMain = ({children}) => {

    return (
        <>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default LayoutMain;