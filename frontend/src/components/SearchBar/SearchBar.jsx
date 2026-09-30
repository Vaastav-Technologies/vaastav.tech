import "./SearchBar.css"
import {Link} from "react-router"
// import { FaSearch } from 'react-icons/fa6';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export function SearchBar({ value, onChange}) {

    return (
        <div className="search-bar">
            <FaMagnifyingGlass size={24} className="search-icon" />
            <input className="search-input" type="text"
                   placeholder="Search ..."
                   value={value}
                    onChange={onChange}
            />
        </div>
    )
}