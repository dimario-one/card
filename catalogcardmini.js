import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../store/Actions";
import { createDefaultCartItem } from "../../../../BUSINESS LOGIC/cartFunctions"

export default function Catalogcardmini(props) {
    const { data } = props;
    const [backgroundTextClass, setBackgroundTextClass] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        props.data.captions.topCaption.text ? setBackgroundTextClass("bg-catalog1-catalog1") : setBackgroundTextClass("");
    }, [props.data.captions.topCaption.text])

    function navigateToProdPage() {
        let subModel = props.data.info.subModel ? props.data.info.subModel : "";
        navigate(`/productpage/${props.data.info.model.name}/${subModel}`,{state:props.data});
    }

    const addItemToCart = (productData) => {
        dispatch(addToCart(createDefaultCartItem(productData)));
    }

    return (
        <>
            <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center pt-5" onClick={() => { navigateToProdPage() }}>
                    <div className="mb-4">
                        <div className="col">
                            <span className={`text-color-white-catalog1 ${backgroundTextClass} p-2 pb-3`} >
                                {props.data.captions.topCaption.text}
                            </span>
                        </div>

                        <div className="col col-xs-6 col-sm-12 col-md-12 col-lg-11">
                            <img
                                className="img-fluid"
                                src={`/${props.data.imgUrl}`}
                                alt="Card cap"
                            />
                        </div>
                        <div className="mt-n5">
                            <div className="d-flex flex-column w-100">
                                <div className="col-5 d-flex justify-content-start">
                                    <span className="d-flex justify-content-center text-text-small-catalog1 text-color-white-catalog1 background-ractangle w-50 pt-1 pb-1">
                                        {props.data.colors.length} цветов
                                    </span>
                                </div>
                                <div className="d-flex flex-row mt-2">
                                    <div>
                                        <span className="fs-4 fs-xs-6 fs-sm-5 fs-md-4 fs-lg-3 fs-xl-1 fs-xxl-1 fw-bold text-color-black-catalog1">
                                            {props.data.price} &#8381;
                                        </span>
                                    </div>

                                    <div className="d-flex flex-column  ms-5">
                                        <div className="">
                                            <img
                                                className=""
                                                src="/img/icons/raiting.png"
                                                alt="рейтинг"
                                            />
                                        </div>
                                        <span className="text-text-small-catalog1 text-color-blue-catalog1">
                                            23 отзыва
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <span className="fs-6 fs-xs-6 fs-sm-6 fs-md-5 fs-lg-4 fs-xl-3 text-color-black-catalog1">
                                        {props.data.namePrefix} {props.data.name}
                                    </span>
                                </div>
                            </div>

                            <div className="col mt-5">
                                <button
                                    type="button"
                                    className="button-button-catalog1 ps-4 pe-4 pt-2 pb-2 mt-3 text-pragraph-bold-catalog1 text-color-white-catalog1"
                                    onClick={() => addItemToCart(data)}
                                >
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
