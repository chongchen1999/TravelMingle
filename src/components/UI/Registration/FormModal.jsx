// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactModal from 'react-modal';

// 确保在应用的顶层组件中设置了 ReactModal 的 App Element
ReactModal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
const FormModal = ({ formData, isOpen, onRequestClose }) => {
    // 格式化显示的表单数据
    const formattedData = Object.entries(formData).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '10px' }}>
            <span style={{ color: 'navy', marginRight: '10px' }}>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
            <span style={{ color: 'darkslategray' }}>{value.toString()}</span>
        </div>
    ));

    // 自定义样式
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明黑色背景
            zIndex: 1000, // 确保模态框在页面内容之上
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f0f0f0', // 模态框背景颜色
            borderRadius: '10px', // 圆角
            padding: '20px', // 内边距
            maxWidth: '600px', // 最大宽度
            width: '90%', // 宽度
            color: 'black', // 文字颜色
        }
    };

    const onConfirm = () => {
        alert("Congratulations, your registration is successful!");
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <strong style={{ color: 'darkblue', marginBottom: '20px' }}>Check the information: </strong>

            <div style={{ marginBottom: '20px' }}>
                {formattedData}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                    onClick={onConfirm}
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '10px 20px',
                        cursor: 'pointer',
                    }}
                >
                    Confirm
                </button>

                <button
                    onClick={onRequestClose}
                    style={{
                        backgroundColor: 'gray',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '10px 20px',
                        cursor: 'pointer',
                    }}
                >
                    Close
                </button>
            </div>

        </ReactModal>
    );
};

export default FormModal;
