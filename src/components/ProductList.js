import axios from "axios";
import { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function ProductList() {

    const baseURL = "https://laravel.weingenious.in/bellamy/api/jewelry/All";
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [selected, setSelected] = useState([]);
    const [selectedDiamonds, setSelectedDiamonds] = useState([]);
    const [selectedSetting, setSelectedSetting] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const options = [
        { label: "White Gold", value: "White Gold" },
        { label: "Rose Gold", value: "Rose Gold" },
        { label: "Gold", value: "Gold" },
    ];
    const optionsDiamonds = [
        { label: "Round", value: "1" },
        { label: "Asscher", value: "2" },
        { label: "Oval", value: "3" },
        { label: "Heart", value: "4" },
        { label: "Cusion", value: "5" },
        { label: "Emerald", value: "6" },
        { label: "Marquise", value: "7" },
        { label: "Pear", value: "8" },
        { label: "Radiant", value: "9" },
        { label: "Princess", value: "10" },
        { label: "Unique", value: "11" },
    ];
    const optionSetting = [
        { label: "Prong", value: "1" },
        { label: "Bezel", value: "2" },
        { label: "Three Stone", value: "3" },
        { label: "Pave", value: "4" },
        { label: "Side Stone", value: "5" },
        { label: "Tension", value: "6" },
        { label: "Channel", value: "7" },
        { label: "Vintage", value: "8" },
        { label: "Halo", value: "9" },
        { label: "Solitaire", value: "10" },
        { label: "Classic", value: "11" },
        { label: "Nick", value: "12" },
    ];
    const optionCategory = [
        { label: "Rings", value: "1" },
        { label: "Earrings", value: "2" },
        { label: "Bracelets", value: "3" },
        { label: "Bridal", value: "4" },
    ];
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    const [Pfrom, setPFrom] = useState("")
    const [Pto, setPTo] = useState("")

    function getData() {
        axios
            .post(baseURL)
            .then((response) => {
                setData(response.data.data)
                setFilter(response.data.data)
            });
    }

    useEffect(() => {
        getData()
    }, [])

    const funSelect = (e) => {
        setSelected(e)
        let dataCopy = []
        if (e.length > 0) {
            e.map((iteme) => {
                filter.map((itemd) => {
                    if (iteme.value == itemd?.metal_type?.paraname) {
                        dataCopy = [...dataCopy, itemd]
                    }
                })
            })
            setData([...dataCopy])
        }
        else {
            setData([...filter])
        }
    }

    const funSelectDiamonds = (e) => {
        setSelectedDiamonds(e)
        let dataCopy = []
        if (e.length > 0) {
            e.map((iteme) => {
                filter.map((itemd) => {
                    if (iteme.value == itemd?.jewelry_diamonds?.shape) {
                        dataCopy = [...dataCopy, itemd]
                    }
                })
            })
            setData([...dataCopy])
        }
        else {
            setData([...filter])
        }
    }


    const funWeight = (to) => {
        let dataCopy = []
        if (from == '' || to == '') {
            setData(filter)
        } else {
            filter.map((itemd) => {
                if (from <= itemd?.metalweight && to >= itemd?.metalweight) {
                    dataCopy = [...dataCopy, itemd]
                }
            })
            setData([...dataCopy])
        }

    }


    const funPrice = (Pto) => {
        let dataCopy = []
        if (Pfrom == '' || Pto == '') {
            setData(filter)
        } else {
            filter.map((itemd) => {
                if (Pfrom <= itemd?.offerprice && Pto >= itemd?.offerprice) {
                    dataCopy = [...dataCopy, itemd]
                }
            })
            setData([...dataCopy])
        }

    }

    const funSelectSetting = (e) => {
        setSelectedSetting(e)
        let dataCopy = []
        if (e.length > 0) {
            e.map((iteme) => {
                filter.map((itemd) => {
                    if (iteme.label == itemd?.setting_type?.paraname) {
                        dataCopy = [...dataCopy, itemd]
                    }
                })
            })
            setData([...dataCopy])
        }
        else {
            setData([...filter])
        }
    }

    const funSelectCategory = (e) => {
        setSelectedCategory(e)
        let dataCopy = []
        if (e.length > 0) {
            e.map((iteme) => {
                filter.map((itemd) => {
                    if (iteme.label == itemd?.category?.name) {
                        dataCopy = [...dataCopy, itemd]
                    }
                })
            })
            setData([...dataCopy])
        }
        else {
            setData([...filter])
        }
    }

    return (
        <div>
            <html>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">JEWELLRY</a>

                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" style={{ flex: 1 }}>
                            <h5 style={{ color: 'white', flex: 1 }}>Metal Type</h5>
                            <MultiSelect
                                options={options}
                                value={selected}
                                onChange={(e) => funSelect(e)}
                                labelledBy={"Metal Type"}

                            />
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" style={{ flex: 1 }}>
                            <h5 style={{ color: 'white', flex: 1 }}>Diamonds Type</h5>
                            <MultiSelect
                                options={optionsDiamonds}
                                value={selectedDiamonds}
                                onChange={(e) => funSelectDiamonds(e)}
                                labelledBy={"Diamonds Type"}
                            />
                        </div>
                        <div id="navbarNavDarkDropdown">
                            <h5 style={{ color: 'white', flex: 1 }}>Weight</h5>
                            <div style={{ display: 'flex' }}>
                                <div class="input-group mb-3" style={{ width: 100, paddingRight: 5 }}>
                                    <span class="input-group-text" id="basic-addon1">FROM</span>
                                    <input onChange={(e) => { setFrom(e.target.value); setTo("") }} value={from} type="text" class="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3" style={{ width: 100 }}>
                                    <span class="input-group-text" id="basic-addon1">TO</span>
                                    <input onChange={(e) => { setTo(e.target.value); funWeight(e.target.value) }} value={to} type="text" class="form-control" placeholder="5" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" style={{ flex: 1 }}>
                            <h5 style={{ color: 'white', flex: 1 }}>Setting Type</h5>
                            <MultiSelect
                                options={optionSetting}
                                value={selectedSetting}
                                onChange={(e) => funSelectSetting(e)}
                                labelledBy={"Setting Type"}
                            />
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" style={{ flex: 1 }}>
                            <h5 style={{ color: 'white', flex: 1 }}>Category List</h5>
                            <MultiSelect
                                options={optionCategory}
                                value={selectedCategory}
                                onChange={(e) => funSelectCategory(e)}
                                labelledBy={"Category List"}
                            />
                        </div>
                        <div id="navbarNavDarkDropdown">
                            <h5 style={{ color: 'white', flex: 1 }}>Price</h5>
                            <div style={{ display: 'flex' }}>
                                <div class="input-group mb-3" style={{ width: 100, paddingRight: 5 }}>
                                    <span class="input-group-text" id="basic-addon1">FROM</span>
                                    <input onChange={(e) => { setPFrom(e.target.value); setPTo("") }} value={Pfrom} type="text" class="form-control" placeholder="300" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3" style={{ width: 100 }}>
                                    <span class="input-group-text" id="basic-addon1">TO</span>
                                    <input onChange={(e) => { setPTo(e.target.value); funPrice(e.target.value) }} value={Pto} type="text" class="form-control" placeholder="3400" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="jumbotron pt-3">
                    <div className="container container-main">
                        <div className="product-page-div" id="productdiv" style={{ display: 'flex' }}>
                            {data.map((item) => {
                                return (
                                    <div style={{ justifyContent: 'space-evenly' }}>
                                        <div className="product-div find-img" >
                                            <div className="product-div-div" >
                                                <div className="product-div-box" style={{ padding: 20 }}>
                                                    <div className="product-div-list">
                                                        <img src={item.get_default_img.path} className="inner-img-product change-image" style={{ width: 200, height: 200 }} />
                                                    </div>
                                                    <div className="text-center show-viewbtn" style={{ width: 200, paddingTop: 20 }}>
                                                        <h6 className="product-title pt-3 line1-doted-3">
                                                            {item.title}
                                                        </h6>
                                                        <p className="product-title-price mb-0" style={{ padding: 20 }}>
                                                            <span className="ml-2 show" style={{ fontSize: 17 }}>${item.offerprice == null ? item.price : item.offerprice}</span>
                                                            <span className="ml-2 show" style={{ paddingLeft: 20, fontSize: 15 }}><del>${item.price}</del></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section >
            </html >
        </div >
    )
}
