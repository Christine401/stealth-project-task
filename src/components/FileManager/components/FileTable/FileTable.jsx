import { useState,useEffect } from "react"
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import EnhancedTable from './DataTable/DataTable'
const FileTable = ({searchValue}) => {
const [files, setFiles] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [errorMessage,setErrorMessage] = useState('')
const handleDeleteFile = (fileId) => {
  const filteredFiles = files.filter(file=>file.id !== fileId)
  setFiles(filteredFiles)
}

  const filesUrl =
    "https://646312614dca1a661353d0ee.mockapi.io/api/Files";
  useEffect(() => {
    const fetchFiles = async () => {
      try {
      setIsLoading(true);
      const { data } = await axios.get(filesUrl);
        setFiles(data.map(d=>({...d,Label:d?.Label ? d.Label : 'Test'})));
        setIsLoading(false)
        setErrorMessage('')
      }
      catch(e) {
        setIsLoading(false)
        setErrorMessage(e.message)
        setFiles([])
      }
    };
    fetchFiles()
  }, []);
  const renderTable = () => {
    if(isLoading) {
        return <CircularProgress color="secondary" />
    } 
    else if(errorMessage !== "") {
      return <h1>{errorMessage}</h1>
    }
    else if(files.length > 0){
      const filteredFiles = files.filter(file=>file.Name.toLowerCase().includes(searchValue.toLowerCase()))
      return <div className="category-header">
                <EnhancedTable files={filteredFiles} handleDeleteFile={handleDeleteFile} />
            </div>
     
    }
  }

 return <div className="files-container">{renderTable()}</div>;



}

export default FileTable