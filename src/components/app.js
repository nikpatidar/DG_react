import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
    const [allData, setAllData] = useState([]);
    const [searchTerm, setSearchTerm] = useState(allData);
    const contentList = useSelector((state) => state.contentList);

     // eslint-disable-next-line
    useEffect(() => {
        setAllData(contentList.page.content_items.content);
        setSearchTerm(contentList.page.content_items.content);
         // eslint-disable-next-line
    }, [searchTerm]);

    const handleChange = event => {
        let value = event.target.value.toLowerCase();
        let result = allData.filter((data) => {
            return data.name.search(value) !== -1;
        });
        console.log(result);
        setSearchTerm(result);
    };

    return (
        <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible customCon">
            <header className="flex">
                <button className="flex backBtn">
                    <img src="assets/Back.png" alt="" />
                </button>
                <div className="">
                    <input type="text"
                        onChange={handleChange}
                        className="h-14 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                        placeholder="Search anything..." />
                </div>
            </header>
            <div>
                <div className="grid grid-cols-3 gap-4">
                    {contentList.page.total_content_items !== 0 ? (
                        searchTerm.map((v, i) => (
                            <div key={i} className="box">
                                <img src="assets/poster1.jpg" alt="" />
                                <p>{v.name}</p>
                            </div>
                        ))
                    ) : <div>Data Not Found</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;