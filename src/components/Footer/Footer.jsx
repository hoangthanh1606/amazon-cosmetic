import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.footerWrapper}>
      <hr />

      <div className={css.footer}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>Amazon</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.containLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className={css.containLine}>
              <PhoneIcon className={css.icon} />
              <span>352-306-4415</span>
            </span>
            <span className={css.containLine}>
              <InboxIcon className={css.icon} />
              <span>support@amazon.com</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.containLine}>
              <LoginIcon className={css.icon} />
              <a href="https://unsplash.com">Sign In</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.containLine}>
              <UserIcon className={css.icon} />
              <a href="/about">Abou Us</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.containLine}>
              <LinkIcon className={css.icon} />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright ©2022 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer
