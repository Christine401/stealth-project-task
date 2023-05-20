import { useState } from 'react';
import './FileManager.css';
import Input from './components/Input/Input'
import Categories from './components/Categories/Categories'
import FileTable from './components/FileTable/FileTable'

const FileManager = () => {
        const [searchValue,setSearchValue] = useState('')
        return <div className='file-manager-wrapper'>
                    <div className='file-manager-container'>
                        <Input  searchValue={searchValue} setSearchValue={setSearchValue}/>
                        <div className="categories-and-filetable">
                            <Categories />
                            <FileTable searchValue={searchValue}/>
                        </div>
                    </div>
               </div>
}

export default FileManager