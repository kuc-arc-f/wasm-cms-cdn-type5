
const Link = ReactRouterDOM.Link,
    Route = ReactRouterDOM.Route;
//
const App = props => (
    <div>
        <Head />
        <ReactRouterDOM.HashRouter>
            <Route path="/" exact component={Home} />
            <Route path="/show/:id" component={Show} />
            <Route path="/pages/:id" component={Page} />
        </ReactRouterDOM.HashRouter>
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'));