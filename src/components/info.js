import React from 'react';

const Info = (props) => {
    return(
        <div className='up'>
            <div className='name'>
                {
                    props.name && <p> {props.name}</p>
                }
            </div>
            <div className='data'>
                <div className='column column_flag'>
                    {
                        props.flag && <img src={props.flag} alt=''/>
                    }
                </div>
                <div className='column'>
                    {
                        props.capital && <p><span>Capital</span> : {props.capital}</p>
                    }
                    {
                        props.language && <p><span>Language</span> : {props.language}</p>
                    }
                    {
                        props.currency && <p><span>Currency</span> : {props.currency}</p>
                    }
                    {
                        props.region && <p><span>Region</span> : {props.region}</p>
                    }
                </div>
                <div className='column'>
                    {
                        props.subregion && <p> <span>Subregion</span> : {props.subregion}</p>
                    }
                    {
                        props.population && <p> <span>Population</span> : {props.population}</p>
                    }
                    {
                        props.timeZone && <p><span>Timezone</span> : {props.timeZone}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Info;