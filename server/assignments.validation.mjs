const validateCreateAssignment = (req, res, next) => {
    if (!req.body) {
        return res.status(400).json({
            "message": "กรุณาใส่ข้อมูลสำหรับการเพิ่ม assignment"
        });
    }

    const checkInColumn = ['title', 'content', 'category', 'email'];
    for (const column of checkInColumn) {
        if (!req.body[column]) {
            return res.status(400).json({
                "message": "ไม่พบข้อมูลใน " + column + " กรุณากรอกข้อมูลให้ครบถ้วน"
            });
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkEmail = emailRegex.test(req.body.email);
    if (!checkEmail) {
        return res.status(400).json({
            "message": "รูปแบบ Email ไม่ถูกต้อง กรุณากรอกที่อยู่อีเมลในรูปแบบที่ถูกต้อง"
        });
    }

    const category = ["Math", "English", "Biology"];
    const checkCategory = category.includes(req.body.category);
    if (!checkCategory) {
        return res.status(400).json({
            "message": "กรุณาใส่ข้อมูล Category ให้ถูกต้อง (Math, English, Biology) เท่านั้น"
        });
    }

    if (req.body.content.length < 500 || req.body.content.length > 1000) {
        return res.status(400).json({
            "message": "กรุณาใส่ข้อมูลใน content 500 - 1000 ตัวอักษร"
        });
    }
    
    next(); 
    /* 
    if (!req.body.title) {
        return res.status(400).json({
            "message": "ไม่พอข้อมูลใน Title กรุณาใส่ข้อมูลให้ครบถ้วน"
        });
    }

    if (!req.body.content) {
        return res.status(400).json({
            "message": "ไม่พบข้อมูลใน Content กรุณาใส่ข้อมูลให้ครบถ้วน"
        });
    }

    if (!req.body.category) {
        return res.status(400).json({
            "message": "ไม่พบข้อมูลใน Category กรุณากรอกข้อมูลให้ครบถ้วน"
        });
    }

    if (!req.body.email) {
        return res.status(400).json({
            "message": "ไม่พบข้อมูลใน Email กรุณากรอกข้อมูลให้ครบถ้วน"
        });
    }
    next()
    */
};
export default validateCreateAssignment;