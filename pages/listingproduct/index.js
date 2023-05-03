import { React, useState, useEffect } from 'react';
import Layout from '@/layouts/Main';
import Link from 'next/link';
import Image from 'next/image';
import ListingProductData from '@/components/molecules/pagination/listingpagedata';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import MultiRangeSlider from '@/components/molecules/multirangeslider';


// Accordion default css link 
import 'react-accessible-accordion/dist/fancy-example.css';

// Import images link 
import ClearIcon from '@/assets/images/pagelisting/clear-icon.svg';
import Pagination from '@/components/molecules/pagination';
import Downarrow from '@/assets/images/icons/down-arr.svg';



// autocomplete search handling  
// Search auto complete data 
const serachitems = [
    {
        id: 0,
        name: 'Cobol'
    },
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'Basic'
    },
    {
        id: 3,
        name: 'PHP'
    },
    {
        id: 4,
        name: 'Java'
    }
]

const ByColorData = [
    {
        "id": "01",
        "select": true,
        "color": "black",
        "colorName": "black",
        "colorQty": 450
    },
    {
        "id": "02",
        "select": true,
        "color": "White",
        "colorName": "White",
        "colorQty": 270
    },
    {
        "id": "03",
        "select": true,
        "color": "Yellow",
        "colorName": "Yellow",
        "colorQty": 150
    },
    {
        "id": "04",
        "select": true,
        "color": "Red",
        "colorName": "Red",
        "colorQty": 841
    },
    {
        "id": "05",
        "select": true,
        "color": "black",
        "colorName": "black",
        "colorQty": 450
    },
    {
        "id": "06",
        "select": true,
        "color": "Blue",
        "colorName": "Blue",
        "colorQty": 555
    },
    {
        "id": "07",
        "select": true,
        "color": "Orange",
        "colorName": "Orange",
        "colorQty": 60
    },
    // {
    //     "id": "08",
    //     "select": true,
    //     "color": "Pink",
    //     "colorName": "Pink",
    //     "colorQty": 100
    // },
    // {
    //     "id": "09",
    //     "select": true,
    //     "color": "black",
    //     "colorName": "black",
    //     "colorQty": 450
    // },
    // {
    //     "id": "10",
    //     "select": true,
    //     "color": "grey",
    //     "colorName": "grey",
    //     "colorQty": 450
    // },
    // {
    //     "id": "11",
    //     "select": true,
    //     "color": "lightblue",
    //     "colorName": "lightblue",
    //     "colorQty": 270
    // },
    // {
    //     "id": "12",
    //     "select": true,
    //     "color": "Yellow",
    //     "colorName": "Yellow",
    //     "colorQty": 150
    // },
    // {
    //     "id": "13",
    //     "select": true,
    //     "color": "Red",
    //     "colorName": "Red",
    //     "colorQty": 841
    // },
    // {
    //     "id": "15",
    //     "select": true,
    //     "color": "black",
    //     "colorName": "black",
    //     "colorQty": 450
    // },
    // {
    //     "id": "16",
    //     "select": true,
    //     "color": "Blue",
    //     "colorName": "Blue",
    //     "colorQty": 555
    // },
    // {
    //     "id": "17",
    //     "select": true,
    //     "color": "Orange",
    //     "colorName": "Orange",
    //     "colorQty": 60
    // },
    // {
    //     "id": "`18",
    //     "select": true,
    //     "color": "Pink",
    //     "colorName": "Pink",
    //     "colorQty": 100
    // },
    // {
    //     "id": "19",
    //     "select": true,
    //     "color": "black",
    //     "colorName": "black",
    //     "colorQty": 450
    // }


]

const SizeData = [
    {
        "id": "01",
        "checkBox": true,
        "sizeNum": 38
    },
    {
        "id": "02",
        "checkBox": true,
        "sizeNum": 40
    },
    {
        "id": "03",
        "checkBox": true,
        "sizeNum": 42
    },
    {
        "id": "04",
        "checkBox": true,
        "sizeNum": 44
    },
    {
        "id": "05",
        "checkBox": true,
        "sizeNum": 46
    },
    {
        "id": "06",
        "checkBox": true,
        "sizeNum": 48
    },
    {
        "id": "07",
        "checkBox": true,
        "sizeNum": 50
    },
    // {
    //     "id": "08",
    //     "checkBox": true,
    //     "sizeNum": 52
    // },
    // {
    //     "id": "09",
    //     "checkBox": true,
    //     "sizeNum": 54
    // },
    // {
    //     "id": "10",
    //     "checkBox": true,
    //     "sizeNum": 56
    // }


]

const CustomDropDownData = [
    {
        "id": "01",
        "optionlist": "Default"
    },
    {
        "id": "02",
        "optionlist": "New Ins"
    },
    {
        "id": "03",
        "optionlist": "Price : Low to High"
    },
    {
        "id": "04",
        "optionlist": "Price : Hight to Low"
    }
]

const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
}

const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
}

const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
}

const handleOnFocus = () => {
    console.log('Focused')
}

const formatResult = (item) => {
    return (
        <>
            <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
            <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
        </>
    )
}
// __________________________________________

const listingproduct = () => {
    const [DropDown, setDropDown] = useState(false);
    const [DropDownList, setDropDownList] = useState("Default");

    const handleDropDown = () => {
        setDropDown(!DropDown);
    }
    const HandleDropDownList = (value) => {
        setDropDownList(value.optionlist)
    }
    return (
        <Layout>
            <div className='listing-page'>
                <div className='banner-img'>
                    <h1>Lorem Ipsum is simply dummy textprinting and typesetting</h1>
                </div>

                <div className='container'>
                    <div className='breadcrumb'>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href={'#'}>Women</Link></li>
                            <li><Link href={'#'}>Clothing</Link></li>
                            <li className='active'><Link href={'#'}>Shirts</Link></li>
                        </ul>
                    </div>

                    <div className='contentWrapper'>
                        <div className='fliter'>
                            <div className='filterheader'><span>Filter</span><p><Image src={ClearIcon}></Image>Clear All</p></div>
                            <Accordion allowMultipleExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            By Brands
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <ReactSearchAutocomplete
                                            // items={items}
                                            onSearch={handleOnSearch}
                                            onHover={handleOnHover}
                                            onSelect={handleOnSelect}
                                            onFocus={handleOnFocus}
                                            autoFocus
                                            formatResult={formatResult}
                                            placeholder={"Search for Brand"}
                                        />

                                        <ul className='brands-list'>
                                            <li><input type="checkbox" /> <span><b>Anouk</b> (8450)</span></li>
                                            <li><input type="checkbox" /> <span><b>AND</b> (1167)</span></li>
                                            <li><input type="checkbox" /> <span><b>Biba</b> (3011)</span></li>
                                            <li><input type="checkbox" /> <span><b>H&M</b> (1067)</span></li>
                                            <li><input type="checkbox" /> <span><b>Ginger by Lifestyle</b> (219)</span></li>
                                            <li><input type="checkbox" /> <span><b>Mango</b> (1059)</span></li>
                                        </ul>

                                        <div className='plusmore'>+ 1008 More</div>


                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            By Price
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='by-price'>
                                            <MultiRangeSlider
                                                min={0}
                                                max={8000}
                                                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                            />
                                            <div className='min-max-input'>
                                                <ul>
                                                    <li>
                                                        <label>Minimum</label>
                                                        <span>$<input type='number' placeholder='100' /></span>
                                                    </li>
                                                    <li>
                                                        <label>Maximum</label>
                                                        <span>$<input type='number' placeholder='8000' /></span>
                                                    </li>
                                                </ul>
                                                <div className='apply-btn'><button type='button'>Apply</button></div>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            By Color
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='by-color'>
                                            <ul>
                                                {
                                                    ByColorData.map((item, i) => {
                                                        return <li key={i}>
                                                            <input type='checkbox' />
                                                            <span className='colors' style={{ backgroundColor: item.color }}></span>
                                                            <p>{item.colorName} <span>({item.colorQty})</span></p>
                                                        </li>
                                                    })
                                                }
                                                <li className='more-row'>
                                                    <p>+ <b>50</b> more</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            By Size
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='by-side'>
                                            <ul>
                                                {
                                                    SizeData.map((size, a) => {
                                                        return <li key={a}><input type='checkbox' />{size.sizeNum}</li>
                                                    })
                                                }
                                                <li className='more-row'><p>+ 15 more</p></li>
                                            </ul>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>
                        </div>

                        <div className='product-listing'>

                            <div className='listingtype'>
                                <h5>Shirts</h5>
                                <div className='short-by'>
                                    <div className='dropdown-wrapper'>
                                        <p>8 Items</p>
                                        <div className='custom-dropdown'>
                                            <div className='dropdown' onClick={handleDropDown}>
                                                Sort by : {DropDownList}
                                                <Image src={Downarrow} alt='Down Arrow Icon' />
                                            </div>
                                            <div className={`dropdown-list ${DropDown ? "displayBlk" : ""}`}>
                                                {
                                                    CustomDropDownData.map((item, i) => {
                                                        return <div className='dropdown-option' key={i} onClick={() => HandleDropDownList(item)}>{item.optionlist}</div>
                                                    })
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* <form>
                                    <ul>
                                        <li>
                                            <label>8 Items</label>
                                            <select>
                                                <option>Sort By : Default</option>
                                                <option>one</option>
                                                <option>two</option>
                                                <option>three</option>
                                                <option>four</option>
                                            </select>
                                        </li>
                                    </ul>
                                </form> */}

                            </div>

                            <div className='cards-listing'>
                                <Pagination Cardsdata={ListingProductData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )

    // function prePage() {
    //     if (currentPage !== 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // }
    // function changeCPage(id) {
    //     setCurrentPage(id);
    // }
    // function nextPage() {
    //     if (currentPage !== npage) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // }
}

export default listingproduct;
