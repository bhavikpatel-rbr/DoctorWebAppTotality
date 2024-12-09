import moment from "moment"
import { format } from 'date-fns';

export const dateFormatter = (date) => {
  if (date)
    return moment(new Date(date)).format('DD-MM-yyyy')
  else
    return ''
}

export const containsNonHtmlText = (inputString) => {
  const textWithoutHtml = inputString.replace(/<[^>]+>/g, '');
  return textWithoutHtml.trim() !== '';
}

export const convertBase64 = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  })

export const headerFormatter = (column, colIndex, { sortElement, filterElement }) => {
  return (
    <div className='d-flex justify-content-between'>
      {column.text}
      {sortElement}
    </div>
  );
};

export const dateFormatterWithTime = (dateString) => {
  const formattedDate = dateString ? format(new Date(dateString), 'dd-MM-yyyy hh:mm a') : "";
  return formattedDate;
};

export const defaultMessageObj = {
  type: "info",
  messageText: "",
  duration: 3000,
  position: "top-center",
}

export const formatDate = (dateString) => {
  const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const PHONE_REG_EXP = /^\d{10}$/;

export const timeToGo = (targetDate) => {
  const now = new Date();
  const target = new Date(targetDate);

  const diffInMs = target - now;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Tomorrow";
  if (diffInDays < 30) return `${diffInDays} Day to go`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    if (diffInMonths === 1) return `1 Month to go`;
    return `${diffInMonths} Month to go`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  if (diffInYears === 1) return `1 Year to go`;
  return `${diffInYears} Year to go`;
}