import type { FC, ReactNode } from 'react'

const LogoIcon: FC = (props): ReactNode => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={124}
            fill='none'
            viewBox='0 0 1030 315'
            {...props}
        >
            <path
                fill='#100740'
                d='M113.666 96.334c8.441 4.404 15.047 10.459 19.817 18.166 4.771 7.707 7.157 16.606 7.157 26.699 0 15.78-5.597 28.9-16.79 39.359-11.193 10.459-24.863 15.689-41.01 15.689H.266V3.578h76.517c15.78 0 29.084 5.138 39.91 15.414 11.009 10.092 16.514 22.753 16.514 37.983 0 16.698-6.514 29.818-19.542 39.36Zm-36.882-63.03H31.919v50.644h44.865c6.973 0 12.844-2.385 17.615-7.156 4.771-4.954 7.156-11.01 7.156-18.166 0-7.156-2.385-13.12-7.156-17.89-4.77-4.955-10.642-7.432-17.615-7.432Zm6.055 133.217c7.34 0 13.487-2.569 18.441-7.707 5.138-5.321 7.707-11.744 7.707-19.267s-2.569-13.854-7.707-18.992c-4.954-5.321-11.101-7.981-18.44-7.981H31.92v53.947h50.92ZM194.408 32.478c-3.669 3.67-8.073 5.505-13.211 5.505s-9.634-1.835-13.487-5.505c-3.67-3.853-5.505-8.349-5.505-13.486 0-5.138 1.835-9.542 5.505-13.212C171.38 1.927 175.876 0 181.197 0s9.817 1.927 13.487 5.78c3.67 3.67 5.504 8.074 5.504 13.212 0 5.137-1.926 9.633-5.78 13.486Zm-28.074 163.769V58.627h29.726v137.62h-29.726ZM266.081 168.172h66.883v28.075H225.62v-19.818l64.407-89.728h-61.654V58.626h101.839v19.818l-64.131 89.728ZM433.057 55.048c15.781 0 28.534 5.046 38.259 15.138 9.725 10.093 14.587 23.946 14.587 41.562v84.499h-29.726v-81.472c0-10.275-2.752-18.166-8.257-23.67-5.505-5.505-13.028-8.258-22.57-8.258-10.459 0-18.899 3.303-25.322 9.91-6.422 6.421-9.633 16.33-9.633 29.725v73.765h-29.726V58.627h29.726v17.615c8.991-14.13 23.212-21.194 42.662-21.194ZM541.306 140.098c2.202 10.459 7.248 18.532 15.139 24.221 7.89 5.505 17.523 8.257 28.9 8.257 15.78 0 27.616-5.688 35.506-17.065l24.496 14.313c-13.578 20-33.671 30.001-60.277 30.001-22.387 0-40.461-6.789-54.223-20.368-13.762-13.762-20.643-31.102-20.643-52.02 0-20.552 6.789-37.709 20.368-51.47 13.579-13.946 31.011-20.919 52.296-20.919 20.184 0 36.699 7.065 49.543 21.194 13.028 14.129 19.542 31.285 19.542 51.47 0 3.119-.367 7.248-1.101 12.386H541.306Zm-.275-24.222h80.921c-2.018-11.193-6.697-19.633-14.037-25.322-7.157-5.688-15.597-8.532-25.322-8.532-11.01 0-20.185 3.027-27.525 9.083-7.339 6.055-12.018 14.312-14.037 24.771ZM699.432 96.61c0 4.587 2.477 8.257 7.432 11.009 5.138 2.569 11.285 4.863 18.441 6.881a250.686 250.686 0 0 1 22.019 6.606c7.34 2.569 13.487 6.973 18.441 13.212 5.138 6.055 7.707 13.762 7.707 23.12 0 13.211-5.138 23.579-15.413 31.102-10.093 7.523-22.845 11.285-38.259 11.285-13.578 0-25.23-2.844-34.956-8.533-9.725-5.688-16.789-13.578-21.193-23.67l25.597-14.863c4.771 13.211 14.955 19.817 30.552 19.817s23.396-5.138 23.396-15.413c0-4.404-2.569-7.982-7.707-10.735-4.955-2.752-11.102-5.046-18.441-6.881a368.62 368.62 0 0 1-21.744-6.881c-7.34-2.569-13.579-6.789-18.717-12.661-4.954-6.055-7.431-13.67-7.431-22.845 0-12.661 4.771-22.845 14.312-30.552 9.725-7.706 21.744-11.56 36.057-11.56 11.376 0 21.469 2.57 30.276 7.707 8.992 4.954 15.873 11.927 20.643 20.918L745.397 97.71c-4.77-10.459-13.395-15.688-25.872-15.688-5.688 0-10.459 1.284-14.313 3.853-3.853 2.386-5.78 5.964-5.78 10.734ZM819.504 140.098c2.202 10.459 7.248 18.532 15.138 24.221 7.89 5.505 17.524 8.257 28.9 8.257 15.781 0 27.616-5.688 35.507-17.065l24.496 14.313c-13.579 20-33.671 30.001-60.278 30.001-22.386 0-40.46-6.789-54.222-20.368-13.762-13.762-20.643-31.102-20.643-52.02 0-20.552 6.789-37.709 20.368-51.47 13.578-13.946 31.01-20.919 52.295-20.919 20.185 0 36.699 7.065 49.544 21.194 13.028 14.129 19.542 31.285 19.542 51.47 0 3.119-.367 7.248-1.101 12.386H819.504Zm-.275-24.222h80.92c-2.018-11.193-6.697-19.633-14.037-25.322-7.156-5.688-15.597-8.532-25.322-8.532-11.01 0-20.184 3.027-27.524 9.083-7.34 6.055-12.019 14.312-14.037 24.771ZM1028.8 87.251h-34.131v66.058c0 5.688 1.284 9.817 3.853 12.386 2.568 2.385 6.328 3.762 11.288 4.129 5.13.183 11.47.091 18.99-.276v26.699c-22.75 2.752-39.085.825-48.994-5.78-9.909-6.79-14.863-19.175-14.863-37.158V87.251h-25.322V58.626h25.322V28.9l29.726-8.807v38.533h34.131v28.625Z'
            />

            <path
                fill='url(#a)'
                d='M0 272.247h19v265H0z'
                transform='rotate(-90 0 272.247)'
            />

            <path
                fill='#100740'
                d='M329.531 250.553h-15.909v11.65h15.242v4.516h-15.242v15.242h-4.773v-35.924h20.682v4.516Zm23.023 5.748h4.465v25.66h-4.465v-3.695c-1.813 2.908-4.585 4.362-8.314 4.362-3.011 0-5.423-.941-7.236-2.822-1.813-1.916-2.72-4.5-2.72-7.75v-15.755h4.465V271.8c0 2.087.565 3.712 1.694 4.875 1.129 1.129 2.685 1.694 4.67 1.694 2.224 0 4.02-.685 5.388-2.053 1.369-1.403 2.053-3.541 2.053-6.415v-13.6Zm32.509 0h4.464v35.924h-4.464v-14.678c-2.224 3.388-5.457 5.081-9.7 5.081-3.592 0-6.654-1.3-9.186-3.9-2.532-2.635-3.798-5.834-3.798-9.597s1.266-6.945 3.798-9.545c2.532-2.635 5.594-3.952 9.186-3.952 4.243 0 7.476 1.694 9.7 5.081v-4.414Zm-9.135 22.016c2.6 0 4.772-.872 6.517-2.617 1.745-1.779 2.618-3.969 2.618-6.569s-.873-4.773-2.618-6.518c-1.745-1.779-3.917-2.668-6.517-2.668-2.566 0-4.722.889-6.467 2.668-1.744 1.745-2.617 3.918-2.617 6.518 0 2.6.873 4.79 2.617 6.569 1.745 1.745 3.901 2.617 6.467 2.617Zm22.622-26.686c-.855 0-1.574-.291-2.155-.872a2.867 2.867 0 0 1-.873-2.104c0-.822.291-1.523.873-2.105.581-.615 1.3-.923 2.155-.923.821 0 1.522.308 2.104.923.582.582.873 1.283.873 2.105 0 .821-.291 1.522-.873 2.104a2.87 2.87 0 0 1-2.104.872Zm-2.258 30.33v-25.66h4.465v25.66h-4.465Zm16.459-4.26h13.652v4.26h-19.759v-2.977l13.087-18.423h-12.573v-4.26h18.731v2.977l-13.138 18.423Zm36.679-21.4h4.465v25.66h-4.465v-3.695c-1.814 2.908-4.585 4.362-8.314 4.362-3.011 0-5.423-.941-7.236-2.822-1.813-1.916-2.72-4.5-2.72-7.75v-15.755h4.465V271.8c0 2.087.564 3.712 1.693 4.875 1.129 1.129 2.686 1.694 4.67 1.694 2.224 0 4.02-.685 5.389-2.053 1.369-1.403 2.053-3.541 2.053-6.415v-13.6Zm32.508 0h4.465v25.66h-4.465v-4.414c-2.224 3.388-5.457 5.081-9.699 5.081-3.592 0-6.655-1.3-9.186-3.9-2.532-2.635-3.798-5.834-3.798-9.597s1.266-6.945 3.798-9.545c2.531-2.635 5.594-3.952 9.186-3.952 4.242 0 7.475 1.694 9.699 5.081v-4.414Zm-9.135 22.016c2.601 0 4.773-.872 6.518-2.617 1.745-1.779 2.617-3.969 2.617-6.569s-.872-4.773-2.617-6.518c-1.745-1.779-3.917-2.668-6.518-2.668-2.566 0-4.721.889-6.466 2.668-1.745 1.745-2.617 3.918-2.617 6.518 0 2.6.872 4.79 2.617 6.569 1.745 1.745 3.9 2.617 6.466 2.617Zm24.829-17.705c1.472-3.182 4.14-4.773 8.006-4.773v4.67c-2.189-.102-4.071.479-5.645 1.745-1.574 1.266-2.361 3.302-2.361 6.107v13.6h-4.464v-25.66h4.464v4.311Zm37.983-4.978c3.011 0 5.423.958 7.236 2.874 1.814 1.882 2.72 4.448 2.72 7.698v15.755h-4.464v-15.499c0-2.087-.565-3.695-1.694-4.824-1.129-1.163-2.686-1.744-4.67-1.744-2.224 0-4.02.701-5.389 2.104-1.368 1.368-2.052 3.489-2.052 6.363v13.6h-4.465v-25.66h4.465v3.695c1.813-2.908 4.584-4.362 8.313-4.362Zm37.487.667h4.413v24.582c0 3.798-1.283 6.74-3.849 8.827-2.566 2.121-5.645 3.182-9.237 3.182-2.874 0-5.354-.547-7.441-1.642-2.087-1.061-3.661-2.6-4.722-4.619l3.9-2.207c1.403 2.874 4.192 4.311 8.366 4.311 2.668 0 4.755-.701 6.261-2.104 1.539-1.403 2.309-3.319 2.309-5.748v-3.643c-2.258 3.421-5.474 5.131-9.648 5.131-3.661 0-6.757-1.3-9.289-3.9-2.532-2.6-3.798-5.765-3.798-9.494s1.266-6.877 3.798-9.443c2.532-2.6 5.628-3.9 9.289-3.9 4.208 0 7.424 1.694 9.648 5.081v-4.414Zm-15.653 19.194c1.745 1.745 3.918 2.617 6.518 2.617 2.6 0 4.773-.872 6.518-2.617s2.617-3.918 2.617-6.518c0-2.566-.872-4.721-2.617-6.466s-3.918-2.617-6.518-2.617c-2.6 0-4.773.872-6.518 2.617-1.744 1.745-2.617 3.9-2.617 6.466 0 2.6.873 4.773 2.617 6.518Zm48.077-19.194h4.465v25.66h-4.465v-4.414c-2.224 3.388-5.457 5.081-9.699 5.081-3.592 0-6.655-1.3-9.186-3.9-2.532-2.635-3.798-5.834-3.798-9.597s1.266-6.945 3.798-9.545c2.531-2.635 5.594-3.952 9.186-3.952 4.242 0 7.475 1.694 9.699 5.081v-4.414Zm-9.135 22.016c2.601 0 4.773-.872 6.518-2.617 1.745-1.779 2.617-3.969 2.617-6.569s-.872-4.773-2.617-6.518c-1.745-1.779-3.917-2.668-6.518-2.668-2.566 0-4.721.889-6.466 2.668-1.745 1.745-2.617 3.918-2.617 6.518 0 2.6.872 4.79 2.617 6.569 1.745 1.745 3.9 2.617 6.466 2.617ZM654.254 235.327c5.057 0 9.271 1.686 12.642 5.057 3.422 3.372 5.134 7.56 5.134 12.566 0 4.955-1.712 9.143-5.134 12.565-3.371 3.372-7.585 5.057-12.642 5.057h-10.957v18.389h-8.811v-53.634h19.768Zm0 26.97c2.605 0 4.75-.868 6.436-2.605 1.686-1.787 2.528-4.035 2.528-6.742s-.842-4.929-2.528-6.666c-1.686-1.788-3.831-2.682-6.436-2.682h-10.957v18.695h10.957Zm28.708 11.034c.613 2.911 2.018 5.159 4.214 6.742 2.197 1.532 4.878 2.299 8.045 2.299 4.393 0 7.688-1.584 9.884-4.751l6.819 3.984c-3.78 5.568-9.373 8.352-16.779 8.352-6.232 0-11.263-1.89-15.094-5.67-3.831-3.831-5.747-8.658-5.747-14.481 0-5.721 1.89-10.497 5.67-14.328 3.78-3.882 8.633-5.823 14.558-5.823 5.618 0 10.216 1.967 13.791 5.9 3.627 3.933 5.44 8.709 5.44 14.328 0 .868-.102 2.017-.306 3.448h-30.495Zm-.076-6.743h22.526c-.562-3.116-1.865-5.465-3.908-7.049-1.992-1.583-4.342-2.375-7.049-2.375-3.065 0-5.619.843-7.662 2.528-2.043 1.686-3.346 3.985-3.907 6.896Zm44.094-5.363c0 1.277.69 2.298 2.069 3.065 1.43.715 3.141 1.353 5.133 1.915a69.906 69.906 0 0 1 6.13 1.839c2.043.715 3.754 1.941 5.133 3.678 1.431 1.685 2.146 3.831 2.146 6.436 0 3.677-1.431 6.563-4.291 8.658-2.809 2.094-6.359 3.141-10.65 3.141-3.78 0-7.024-.792-9.731-2.375-2.707-1.584-4.674-3.78-5.899-6.589l7.125-4.138c1.328 3.678 4.163 5.517 8.505 5.517 4.342 0 6.512-1.431 6.512-4.291 0-1.226-.715-2.222-2.145-2.988-1.379-.766-3.09-1.405-5.133-1.916-1.992-.562-4.01-1.2-6.053-1.915a12.139 12.139 0 0 1-5.21-3.525c-1.38-1.685-2.069-3.805-2.069-6.359 0-3.525 1.328-6.359 3.984-8.505 2.707-2.145 6.053-3.218 10.037-3.218 3.167 0 5.977.715 8.428 2.146 2.503 1.379 4.419 3.32 5.747 5.823l-6.973 3.907c-1.328-2.911-3.728-4.367-7.202-4.367-1.583 0-2.911.357-3.984 1.073-1.073.664-1.609 1.66-1.609 2.988Zm70.521-10.574h8.735l-12.03 38.31h-8.121l-7.969-25.821-8.045 25.821h-8.121l-12.03-38.31h8.735l7.432 26.434 8.045-26.434h7.892l7.968 26.434 7.509-26.434Zm43.673 0h8.275v38.31h-8.275v-5.517c-3.116 4.342-7.585 6.513-13.408 6.513-5.262 0-9.757-1.941-13.485-5.823-3.729-3.933-5.594-8.709-5.594-14.328 0-5.67 1.865-10.446 5.594-14.328 3.728-3.882 8.223-5.823 13.485-5.823 5.823 0 10.292 2.146 13.408 6.436v-5.44Zm-20.764 27.966c2.299 2.299 5.185 3.448 8.658 3.448s6.359-1.149 8.658-3.448c2.299-2.349 3.448-5.286 3.448-8.811 0-3.524-1.149-6.436-3.448-8.734-2.299-2.35-5.185-3.525-8.658-3.525s-6.359 1.175-8.658 3.525c-2.298 2.298-3.448 5.21-3.448 8.734 0 3.525 1.15 6.462 3.448 8.811Zm72.55 10.344h-9.884l-15.707-17.699v17.699h-8.275v-53.634h8.275v32.257l14.864-16.933h10.114l-16.857 18.772 17.47 19.538Zm26.194-30.341h-9.5v18.388c0 1.584.357 2.733 1.072 3.448.715.664 1.763 1.047 3.142 1.149 1.43.052 3.192.026 5.286-.076v7.432c-6.333.766-10.88.23-13.638-1.609-2.758-1.89-4.137-5.338-4.137-10.344V258.62h-7.049v-7.969h7.049v-8.275l8.275-2.451v10.726h9.5v7.969Zm7.506 30.341v-55.932h8.274v55.932h-8.274Zm24.395-15.63c.613 2.911 2.018 5.159 4.214 6.742 2.196 1.532 4.878 2.299 8.045 2.299 4.393 0 7.688-1.584 9.884-4.751l6.819 3.984c-3.78 5.568-9.373 8.352-16.78 8.352-6.231 0-11.263-1.89-15.094-5.67-3.831-3.831-5.746-8.658-5.746-14.481 0-5.721 1.89-10.497 5.67-14.328 3.78-3.882 8.632-5.823 14.558-5.823 5.618 0 10.215 1.967 13.791 5.9 3.627 3.933 5.44 8.709 5.44 14.328 0 .868-.102 2.017-.307 3.448h-30.494Zm-.077-6.743h22.526c-.561-3.116-1.864-5.465-3.907-7.049-1.992-1.583-4.342-2.375-7.049-2.375-3.065 0-5.619.843-7.662 2.528-2.043 1.686-3.346 3.985-3.908 6.896Zm44.447 6.743c.613 2.911 2.018 5.159 4.214 6.742 2.201 1.532 4.881 2.299 8.041 2.299 4.4 0 7.69-1.584 9.89-4.751l6.82 3.984c-3.78 5.568-9.38 8.352-16.78 8.352-6.23 0-11.265-1.89-15.096-5.67-3.831-3.831-5.747-8.658-5.747-14.481 0-5.721 1.89-10.497 5.67-14.328 3.78-3.882 8.633-5.823 14.553-5.823 5.62 0 10.22 1.967 13.8 5.9 3.62 3.933 5.44 8.709 5.44 14.328 0 .868-.11 2.017-.31 3.448h-30.495Zm-.076-6.743h22.521c-.56-3.116-1.86-5.465-3.9-7.049-1.99-1.583-4.34-2.375-7.05-2.375-3.07 0-5.62.843-7.664 2.528-2.043 1.686-3.345 3.985-3.907 6.896Z'
            />
            <defs>

                <linearGradient
                    id='a'
                    x1={0}
                    x2={0}
                    y1={272.247}
                    y2={537.247}
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#FF8759' />
                    <stop offset={0.255} stopColor='#FF457A' />
                    <stop offset={0.605} stopColor='#9A2CD3' />
                    <stop offset={1} stopColor='#3F51F5' />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default LogoIcon