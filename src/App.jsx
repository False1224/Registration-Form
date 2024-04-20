import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    IP: '',
    Username: '',
    OS: '',
    NodeType: '',
    Operator: '',
    HostName: '',
    Circle: '',
    TimeSync: '',
    RemotePort: '',
    LocalPort: '',
    Direction: '',
    SocketPath: '',
    Status: '',
    Comment: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const requiredFields = ['IP', 'Username', 'OS', 'RemotePort', 'LocalPort', 'Direction', 'SocketPath', 'Status', 'Comment'];

    const isValid = requiredFields.every(field => formData[field].trim() !== '');

    if (!isValid) {
      setErrorMessage('Please fill in all required fields.');
      setSuccessMessage('');
    } else {
      setSuccessMessage('Form submitted successfully!');
      setErrorMessage('');
    }
  };

  return (
    <div className="bg-gray-100">
      <nav className="h-16 bg-sky-600 flex items-center">
        <div className="w-10/12 m-auto flex justify-between">
          <img src="logo1.png" alt="Logo" className="h-8 w-20" />
          <button type="button" className="px-3 rounded-full text-white hover:bg-sky-900 shadow-inner shadow-white">Log out</button>
        </div>
      </nav>
      <main className="flex flex-col justify-center w-[28vw] m-auto">
        <div className="flex justify-between mt-4">
          <label htmlFor="IP" className="w-60 border-2 flex justify-between items-center pl-4">IP</label>
          <input id="IP" type="text" name="IP" value={formData.IP} onChange={handleChange} placeholder="IP" className="border-2 p-3 rounded-r-full" />
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="Username" className="w-60 border-2 flex justify-between items-center pl-4">Username</label>
          <input id="Username" type="text" name="Username" value={formData.Username} onChange={handleChange} placeholder="Username" className="border-2 p-3 rounded-r-full" />
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="OS" className="w-60 border-2 flex justify-between items-center pl-4">OS</label>
          <input list="OS" name="OS" className="border-2 p-3 rounded-r-full" placeholder="Open this select menu" required />
          <datalist id="OS">
            <option value="Windows" />
            <option value="Mac" />
            <option value="Linux" />
          </datalist>
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="NodeType" className="w-60 border-2 flex justify-between items-center pl-4">Node type</label>
          <input list="NodeType" name="NodeType" className="border-2 p-3 rounded-r-full" placeholder="Open this select menu" />
          <datalist id="NodeType">
            <option value="dummy1" />
            <option value="dummy2" />
            <option value="dummy3" />
          </datalist>
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="Operator" className="w-60 border-2 flex justify-between items-center pl-4">Operator</label>
          <input list="Operator" name="Operator" className="border-2 p-3 rounded-r-full" placeholder="Open this select menu" />
          <datalist id="Operator">
            <option value="dummy1" />
            <option value="dummy2" />
            <option value="dummy3" />
          </datalist>
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="HostName" className="w-60 border-2 flex justify-between items-center pl-4">Host Name</label>
          <input list="HostName" name="HostName" className="border-2 p-3 rounded-r-full" placeholder="Open this select menu" />
          <datalist id="HostName">
            <option value="dummy1" />
            <option value="dummy2" />
            <option value="dummy3" />
          </datalist>
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="Circle" className="w-60 border-2 flex justify-between items-center pl-4">Circle</label>
          <input list="Circle" name="Circle" className="border-2 p-3 rounded-r-full" placeholder="Open this select menu" />
          <datalist id="Circle">
            <option value="dummy1" />
            <option value="dummy2" />
            <option value="dummy3" />
          </datalist>
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="TimeSync" className="w-60 border-2 flex justify-between items-center pl-4">Time Sync</label>
          <input list="TimeSync" name="TimeSync" className="border-2 p-3 rounded-r-full" placeholder="Open this select menu" />
          <datalist id="TimeSync">
            <option value="dummy1" />
            <option value="dummy2" />
            <option value="dummy3" />
          </datalist>
        </div>
      </main>
      <section>
        <p className="text-center mt-8 text-xl">Port details</p>
        <div className="flex flex-col justify-center w-[28vw] m-auto">
          <div className="flex justify-between mt-4">
            <label htmlFor="RemotePort" className="w-60 border-2 flex justify-between items-center pl-4">Remote Port</label>
            <input id="RemotePort" type="text" name="RemotePort" value={formData.RemotePort} onChange={handleChange} placeholder="Remote Port" className="border-2 p-3 rounded-r-full" />
          </div>
          <div className="flex justify-between mt-4">
            <label htmlFor="LocalPort" className="w-60 border-2 flex justify-between items-center pl-4">Local Port</label>
            <input id="LocalPort" type="text" name="LocalPort" value={formData.LocalPort} onChange={handleChange} placeholder="Local Port" className="border-2 p-3 rounded-r-full" />
          </div>
          <div className="flex justify-between mt-4">
            <label htmlFor="Direction" className="w-60 border-2 flex justify-between items-center pl-4">Direction</label>
            <input list="Direction" name="Direction" className="border-2 p-3 rounded-r-full" placeholder="Open this select menu" />
            <datalist id="Direction">
              <option value="dummy1" />
              <option value="dummy2" />
              <option value="dummy3" />
            </datalist>
          </div>
          <div className="flex justify-between mt-4">
            <label htmlFor="SocketPath" className="w-60 border-2 flex justify-between items-center pl-4">Socket Path</label>
            <input id="SocketPath" type="text" name="SocketPath" value={formData.SocketPath} onChange={handleChange} placeholder="Socket Path" className="border-2 p-3 rounded-r-full" />
          </div>
          <div className="flex justify-between mt-4">
            <label htmlFor="Status" className="w-60 border-2 flex justify-between items-center pl-4">Status</label>
            <input id="Status" type="text" name="Status" value={formData.Status} onChange={handleChange} placeholder="Status" className="border-2 p-3 rounded-r-full" />
          </div>
          <div className="flex justify-between mt-4">
            <label htmlFor="Comment" className="w-60 border-2 flex justify-between items-center pl-4">Comment</label>
            <input id="Comment" type="text" name="Comment" value={formData.Comment} onChange={handleChange} placeholder="Comment" className="border-2 p-3 rounded-r-full" />
          </div>
          <p className="text-center mt-4 text-red-500" id="failed">{errorMessage}</p>
          <p className="text-center mt-4 text-green-500" id="Success">{successMessage}</p>
          <div className="flex justify-center">
            <div className="flex justify-center bg-sky-600 w-28 rounded-full p-2 shadow-inner shadow-white border-2 border-sky-200 text-white cursor-pointer hover:bg-sky-800">
              <input type="button" value="Submit" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </section>
      <div className="h-16"></div>
      
    </div>
  );
};

export default FormComponent;
