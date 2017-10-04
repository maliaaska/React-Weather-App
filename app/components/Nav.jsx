var React = require('react');
var {Link, IndexLink} = require('react-router');

 var Nav = () => {
    return (
        <div>
            <h1>Navigation Component</h1>
             <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
             <Link to='/About' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link> 
             <Link to='/Examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>           
        </div>
    );
 }
module.exports = Nav;