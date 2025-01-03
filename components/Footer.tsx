import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#4BC59E] text-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Brand Section */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
             
            <span className="ml-3 text-xl font-bold">Taha-Shop</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Your one-stop solution for online shopping.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Column 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
              SHOP
            </h2>
            <nav className="list-none mb-10">
              <ul>

              <li className="text-gray-600 hover:text-gray-800">
                
                  Men
                
              </li>
              <li className="text-gray-600 hover:text-gray-800">
                
                  Women
                
              </li>
              <li className="text-gray-600 hover:text-gray-800">
                
                  Kids
                
              </li>
              <li className="text-gray-600 hover:text-gray-800">
               
                  Accessories
                
              </li>
              </ul>
            </nav>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <ul>
              <li className="text-gray-600 hover:text-gray-800">
                
                  About Us
               
              </li>
              <li className="text-gray-600 hover:text-gray-800">
                
                  Careers
                
              </li>
              <li className="text-gray-600 hover:text-gray-800">
                
                  Blog
               
              </li>
              <li className="text-gray-600 hover:text-gray-800">
               
                  Press
               
              </li>
              </ul>
            </nav>
          </div>

          {/* Column 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <ul>
              <li className="text-gray-600 hover:text-gray-800">
               
                  Help Center
                
              </li>
              <li className="text-gray-600 hover:text-gray-800">
                
                  Returns
                
              </li>
              <li className="text-gray-600 hover:text-gray-800">
               
                  Shipping
                
              </li>
              <li className="text-gray-600 hover:text-gray-800">
                
                  Terms & Conditions
               
              </li>
              </ul>
            </nav>
          </div>

          {/* Column 4 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SOCIAL
            </h2>
            <nav className="list-none mb-10">
              <ul>
              <li>
                <Link href="https://www.facebook.com/muhammad.tahaawan.7" target='_blank' className="text-gray-600 hover:text-gray-800">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://x.com/taha__awan?t=qHEAQ1nGJr7kw9nP-lTKNQ&s=09" target='_blank' className="text-gray-600 hover:text-gray-800">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/tahaawan598/?next=%2F" target='_blank' className="text-gray-600 hover:text-gray-800">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/muhammad-taha-4735912b6/" target='_blank' className="text-gray-600 hover:text-gray-800">
                  LinkedIn
                </Link>
              </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} E-Shop —
            <Link href="/privacy" className="text-gray-600 ml-1">
              Privacy Policy
            </Link>
          </p>
         
          <span className="flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-9">
          <Link
              href="https://www.facebook.com/muhammad.tahaawan.7"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
             
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://x.com/taha__awan?t=qHEAQ1nGJr7kw9nP-lTKNQ&s=09"
              target="_blank"
              className="hover:text-blue-400 transition-colors"
              
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-taha-4735912b6/"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
             
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/tahaawan598/?next=%2F"
              target="_blank"
              className="hover:text-pink-500 transition-colors"
              
            >
              <FaInstagram size={20} />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
