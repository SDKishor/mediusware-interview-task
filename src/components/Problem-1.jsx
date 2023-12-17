import React, {useRef, useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [tableData, setTableData] = useState([]);
    const [fillterData, setFillterData] = useState([]);
    const nameRef = useRef("")
    const statusRef = useRef("")


    const handleClick = (val) =>{
        setShow(val);
        if(val == "active"){
            const result = tableData.filter((data) => data.status === "active");
        setFillterData(result);
        }
        if(val == "completed"){
            const result = tableData.filter((data) => data.status === "completed");
        setFillterData(result);
        }
        if(val == "all"){
            
        setFillterData("");
        }
        
    }
    

    
    const handleSubmitData = (e) =>{
        e.preventDefault();
        const newdata = {name:nameRef.current.value, status:statusRef.current.value}; 
        const newtabledata = [...tableData, newdata];
        const sortedData = newtabledata.sort((a, b) => a.status.localeCompare(b.status));
        setTableData(sortedData)
        e.target[0].value = "";
        e.target[1].value = "";
        
        
    }
    

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmitData} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" ref={nameRef} required  className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" ref={statusRef} required className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            show == "all" ? tableData.map((data, index) =>(
                                <tr key={index}>
                            <th scope="col">{data.name}</th>
                            <th scope="col">{data.status}</th>
                            </tr>)) :

                            fillterData.map((data, index) =>(
                                <tr key={index}>
                            <th scope="col">{data.name}</th>
                            <th scope="col">{data.status}</th>
                            </tr>))
                            
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;