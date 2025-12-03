import React from 'react';

// Define the component signature to accept standard icon props
interface Flags extends React.SVGProps<SVGSVGElement> {
    size?: number | string; // Optional prop to easily set width and height
}

const IranFlagIcon: React.FC<Flags> = ({ size = 24, ...props }) => (
    <svg 
        width={size} 
        height={size} 
        fill="none" 
        viewBox="0 0 24 24" 
        // Spread any other props (like className or onClick)
        {...props}
    >
        <g clipPath="url(#IR_svg__a)">
            <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#F0F0F0" />
            <path
                d="M15.898 8.87h-1.57c.013.172.02.346.02.521 0 1.161-.29 2.286-.796 3.087-.156.247-.418.596-.77.831V8.87h-1.565v4.44c-.35-.235-.613-.584-.769-.83-.506-.802-.796-1.927-.796-3.088 0-.175.008-.349.02-.521h-1.57c-.01.171-.015.345-.015.521 0 3.219 1.719 5.74 3.913 5.74s3.913-2.521 3.913-5.74c0-.176-.005-.35-.015-.521Z"
                fill="#D80027"
            />
            <path
                d="M4.957 5.738h1.565v1.044h1.566V5.738h1.565v1.044h1.565V5.738h1.565v1.044h1.565V5.738h1.566v1.044h1.565V5.738h1.565v1.044h3.766A12 12 0 0 0 12-.001 12 12 0 0 0 1.192 6.782h3.766V5.738Z"
                fill="#6DA544"
            />
            <path
                d="M19.044 17.217v1.044H17.48v-1.044h-1.565v1.044H14.35v-1.044h-1.566v1.044h-1.565v-1.044H9.653v1.044H8.088v-1.044H6.522v1.044H4.957v-1.044H1.191A12 12 0 0 0 12.001 24a12 12 0 0 0 10.809-6.783h-3.766Z"
                fill="#D80027"
            />
        </g>
        <defs>
            <clipPath id="IR_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

const AzerbaijaniFlagIcon: React.FC<Flags> = ({ size = 24, ...props }) => (
    <svg 
        width={size} 
        height={size} 
        fill="none" 
        viewBox="0 0 24 24" 
        // Spread any other props (like className or onClick)
        {...props}
    >
        <g clipPath="url(#AZ_svg__a)">
            <path
                d="M24 12c0-1.468-.264-2.874-.746-4.174L12 7.304.746 7.826A11.975 11.975 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 16.696l11.254-.522c.482-1.3.746-2.706.746-4.174Z"
                fill="#D80027"
            />
            <path d="M12 24c5.16 0 9.559-3.257 11.254-7.826H.747C2.443 20.744 6.841 24 12.001 24Z" fill="#6DA544" />
            <path d="M.747 7.825h22.507C21.56 3.255 17.16 0 12.001 0 6.84-.001 2.443 3.256.747 7.825Z" fill="#338AF3" />
            <path
                d="M12.26 15.391a3.391 3.391 0 1 1 1.614-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.408-1.613.408Z"
                fill="#F0F0F0"
            />
            <path
                d="m14.87 9.65.449 1.264 1.21-.576-.575 1.211 1.263.45-1.263.449.575 1.21-1.21-.575-.45 1.263-.449-1.263-1.21.576.575-1.211-1.264-.45 1.264-.449-.576-1.21 1.211.575.45-1.263Z"
                fill="#F0F0F0"
            />
        </g>
        <defs>
            <clipPath id="AZ_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

const TurkishFlagIcon: React.FC<Flags> = ({ size = 24, ...props }) => (
    <svg 
        width={size} 
        height={size} 
        fill="none" 
        viewBox="0 0 24 24" 
        // Spread any other props (like className or onClick)
        {...props}
    >
        <g clipPath="url(#TR_svg__a)">
            <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#D80027" />
            <path
                d="m11.509 9.805.984 1.357 1.595-.517L13.102 12l.984 1.357-1.594-.519-.986 1.356.001-1.677L9.913 12l1.595-.518V9.806Z"
                fill="#F0F0F0"
            />
            <path
                d="M8.822 15.39a3.391 3.391 0 1 1 1.613-6.374 4.174 4.174 0 1 0 0 5.967c-.48.26-1.029.408-1.613.408Z"
                fill="#F0F0F0"
            />
        </g>
        <defs>
            <clipPath id="TR_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

const BritishFlagIcon: React.FC<Flags> = ({ size = 24, ...props }) => (
    <svg 
        width={size} 
        height={size} 
        fill="none" 
        viewBox="0 0 24 24" 
        // Spread any other props (like className or onClick)
        {...props}
    >
        <g clip-path="url(#GB_svg__a)">
            <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
                fill="#F0F0F0" />
            <path
                d="M2.48 4.693A11.956 11.956 0 0 0 .413 8.868h6.243L2.48 4.693Zm21.106 4.176a11.957 11.957 0 0 0-2.067-4.176L17.344 8.87h6.242ZM.413 15.13a11.957 11.957 0 0 0 2.067 4.176l4.176-4.176H.413ZM19.305 2.48A11.957 11.957 0 0 0 15.13.412v6.243l4.175-4.175ZM4.693 21.518a11.957 11.957 0 0 0 4.176 2.067v-6.243l-4.176 4.176ZM8.869.412A11.957 11.957 0 0 0 4.693 2.48L8.87 6.655V.412Zm6.261 23.173a11.96 11.96 0 0 0 4.175-2.067l-4.175-4.176v6.243Zm2.214-8.455 4.175 4.176a11.957 11.957 0 0 0 2.067-4.176h-6.242Z"
                fill="#0052B4"
            />
            <path
                d="M23.898 10.435H13.565V.102a12.12 12.12 0 0 0-3.13 0v10.333H.102a12.12 12.12 0 0 0 0 3.13h10.333v10.333a12.12 12.12 0 0 0 3.13 0V13.565h10.333a12.12 12.12 0 0 0 0-3.13Z"
                fill="#D80027"
            />
            <path
                d="m15.13 15.131 5.356 5.355c.246-.246.48-.503.705-.77l-4.584-4.585H15.13Zm-6.26 0-5.355 5.355c.246.246.503.481.77.705l4.585-4.584V15.13Zm0-6.261v-.001L3.515 3.514a12.03 12.03 0 0 0-.705.77L7.394 8.87H8.87Zm6.26 0 5.356-5.355a12.023 12.023 0 0 0-.77-.705L15.13 7.394V8.87Z"
                fill="#D80027"
            />
        </g>
        <defs>
            <clipPath id="GB_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

const SaudiFlagIcon: React.FC<Flags> = ({ size = 24, ...props }) => (
    <svg 
        width={size} 
        height={size} 
        fill="none" 
        viewBox="0 0 24 24" 
        // Spread any other props (like className or onClick)
        {...props}
    >
        <g clipPath="url(#SA_svg__a)">
            <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#6DA544" />
            <path
                d="M6.783 14.348c0 .864.701 1.565 1.565 1.565h4.696c0 .72.584 1.304 1.304 1.304h1.566c.72 0 1.304-.584 1.304-1.304v-1.565H6.783Zm10.564-7.565v3.652c0 .576-.468 1.044-1.043 1.044v1.565a2.612 2.612 0 0 0 2.608-2.609V6.783h-1.565ZM6.13 10.435c0 .575-.468 1.043-1.043 1.043v1.566a2.612 2.612 0 0 0 2.609-2.609V6.783H6.13v3.652Z"
                fill="#F0F0F0"
            />
            <path
                d="M16.565 6.783H15v3.652h1.565V6.783ZM12.652 8.87a.261.261 0 0 1-.521 0V6.783h-1.566V8.87a.261.261 0 0 1-.521 0V6.783H8.479V8.87c0 1.007.819 1.826 1.826 1.826.387 0 .747-.122 1.043-.329a1.816 1.816 0 0 0 1.274.314c-.11.457-.522.798-1.013.798v1.565a2.612 2.612 0 0 0 2.609-2.609V6.783h-1.566V8.87Z"
                fill="#F0F0F0"
            />
            <path d="M10.826 11.478H8.48v1.565h2.347v-1.565Z" fill="#F0F0F0" />
        </g>
        <defs>
            <clipPath id="SA_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);


export { IranFlagIcon, AzerbaijaniFlagIcon, TurkishFlagIcon, BritishFlagIcon, SaudiFlagIcon };