import React from 'react'
import Website from '../../Layouts/website'

const Contact = () => {
    return (
        <Website title="Contact">
            <div>
                <div className="lienhe image_contact" >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="contact text-center py-4">
                            <h1 className="mt-5 mb-2 text-center text-white text-2xl font-bold">CONTACT WITH US</h1>
                            <form action="lien-he.php" method="post" encType="multipart/form-data" id="form-add">
                                <input id="name_contact" className="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-white p-2 m-2 placeholder-white " name="ho_ten" placeholder="Name" /><br />
                                <input id="email_contact" type="email" name="gmail" className="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-white p-2 m-2 placeholder-white  " placeholder="Email " /><br />
                                <input id="title_contact" type="text" name="tieu_de" className="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-white p-2 m-2 placeholder-white " placeholder="Title" /><br />
                                <textarea id="content_contact" type="text" name="noi_dung" className="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-white p-2 m-2 placeholder-white " rows={4} placeholder="Content" defaultValue={""} /><br />
                                <div className=" "><button type="submit" className="btn btn-outline-primary border-2 border-white rounded-md w-20 text-white font-bold " name="btn_Lienhe">Send</button></div>
                            </form>
                        </div>
                        <div className="flex justify-center">
                            <div className="about-us text-center text-white bg-gray-500 bg-opacity-75 w-10/12 md:w-3/5 pt-10 ">
                                <div className="p-5">
                                    <h1 className="text-2xl mb-2 font-bold">ABOUT US</h1>
                                    <p className="text-1xl">TRANSMISTER MAKES FACTS AND FASHION TRENDS WORLDWIDE. </p><br />
                                    <i className="text-gray-200">"We provide developers, e-commerce site owners and their customers around the world the best online stores.
              "</i>
                                    <p>-Jerry Combo</p><br />
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f " id="icon_sign_up_footer" /></a>
                                    <a href="https://twitter.com/"> <i className="fab fa-twitter" id="icon_sign_up_footer" /></a>
                                    <a href="https://www.google.com.vn/"><i className="fab fa-google-plus-g" id="icon_sign_up_footer" /></a>
                                    <a href="#"><i className="fas fa-camera" id="icon_sign_up_footer" /></a>
                                    <a href="#"><i className="fas fa-phone-volume" id="icon_sign_up_footer" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 mb-10">
                    <div className="ml-10"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14894.747094875795!2d105.7425176697754!3d21.045215400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455ace9078029%3A0x677e91696344621b!2sShop%20Crocs%20Store%20-%20Crocs%20Vietnam!5e0!3m2!1sen!2s!4v1606202249157!5m2!1sen!2s" width="100%" height="100%" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                    <div className="ml-5">
                        <div className="text-3xl mt-4 font-bold">Contact</div>
                        <hr className="w-20 h-1 bg-black" />
                        <p>
                        </p><ul>
                            <li className="mt-5">
                                <p>Address</p>
                                <p><strong>315 Trường Chinh, Khương Mai, Thanh Xuân, Hà Nội.</strong></p>
                            </li>
                            <li className="mt-4">
                                <p>Email shop</p>
                                <p><strong>datdinh99hp@gmail.com</strong></p>
                            </li>
                            <li className="mt-4">
                                <p>Phone number</p>
                                <p><strong>0987654321</strong></p>
                            </li>
                            <li className="mt-4">
                                <p>Time online</p>
                                <p><strong>Monday to saturday, 9am to 17pm</strong></p>
                            </li>
                        </ul>
                        <p />
                    </div>
                </div></div>

        </Website>
    )
}

export default Contact
