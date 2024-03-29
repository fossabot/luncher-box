/* istanbul ignore file */
import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport/';
import { OWNER_EMAIL, OWNER_PASS, ENV } from '../config';

export const sendEmail = async (options: MailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: OWNER_EMAIL,
      pass: OWNER_PASS
    }
  });

  try {
    return transporter.sendMail(options);
  } catch (error) {
    throw new Error(error);
  }
};
