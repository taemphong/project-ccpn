// validate.js
export const validateRequired = (value) => {
    return !!value || "กรุณากรอกข้อมูล";
};

export const validateSelect = (value) => {
    return !!value || "กรุณาเลือกข้อมูล";
};

export const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value) || "กรุณากรอกอีเมลรูปแบบที่ถูกต้อง";
};

export const validatePhone = (value) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(value) || "เบอร์โทรไม่ถูกต้อง กรอก 10 ตัวเลข";
};
