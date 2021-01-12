import React, {useEffect} from "react"
import './App.css';
import {connect} from 'react-redux'
import FormExample from './components/FormExample'

import {
    currencyListSelector,
    loadingErrorSelector,
    initCurrencyList,
    isLoadingSelector
} from './models/currency'

function App({initCurrencyList, currencyList, loadingError, isLoading}) {

    useEffect(() => {
        initCurrencyList()
        return () => {
            
        }
    }, [initCurrencyList])

    const handleSubmit = (data) => {
        console.log(data)
    }

    if(loadingError === 'error') {
        return (
                <div className="App">
                <header className="App-header">
                    Error!
                </header>
            </div>
        )
    }



    if (isLoading) {
        return (
            <div className="App">
            <header className="App-header">
                data is loading...
            </header>
        </div>
        )
    }
    return (
        <div className="App">
            <header className="App-header">
                <div>
                   {currencyList && currencyList.length > 0 && currencyList.map((item, key) => {
                       return (<div key={key}>{item}</div>)
                   })}
                </div>
                <div>
                {console.log(loadingError)}
                </div>
                {/*<FormExample onSubmit={handleSubmit}/>*/}
            </header>
        </div>
    );
}

export default connect(state => ({
        currencyList: currencyListSelector(state), loadingError: loadingErrorSelector(state), isLoading: isLoadingSelector(state)
    }),
    {initCurrencyList})(App)

