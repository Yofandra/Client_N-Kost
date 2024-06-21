import React, {useState} from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { Link } from "react-router-dom";

const EditKost = () => {
    return(
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik/>
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <Link style={{ color: 'black' }} to={"/pemilik/dashboard"}>
                            <i className="fa-solid fa-arrow-left fa-2x mb-4 "></i>
                        </Link>
                        <h1 className="text-3xl text-black pb-6 font-bold text-center">Edit Kost</h1>
                        <form className="space-y-6">
                            <div className="flex flex-col">
                                <label htmlFor="namaKost" className="font-bold mb-2">Nama Kost:</label>
                                <input type="text" id="namaKost" name="namaKost" className="border-2 rounded-lg p-2 bg-white" value="Masukkan Nomor Kamar" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="deskripsi" className="font-bold mb-2">Deskripsi:</label>
                                <textarea id="deskripsi" name="deskripsi" rows="4" className="border-2 rounded-lg p-2 bg-white" value="Masukkan Deskripsi Kamar"></textarea>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="uploadFoto" className="font-bold mb-2">Upload Foto:</label>
                                <input type="file" id="uploadFoto" name="uploadFoto" className="border-2 rounded-lg p-2 file:bg-[#F39200] file:text-white file:font-bold file:py-2 file:px-4 file:rounded-lg file:border-none"/>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#F39200] text-white font-bold py-2 px-4 rounded-lg">Update Kost</button>
                            </div>
                        </form>
                    </main>
                </div> 
            </div>
        </div> 
    )
}

export default EditKost;