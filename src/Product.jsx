import Products from './Products'

export default function Product(props) {
    // console.log(props.info);
    const { info } = props;
    return (
        <>
            <h2>Hi I am product</h2>
            <Products info={info}></Products>
        </>
    )
}