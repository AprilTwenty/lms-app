const validateCreateAssignment = (req, res, next) => {
    const checkInColumn = ['title', 'content', 'category', 'email'];
    for (const column of checkInColumn) {
        if (!req.body[column]) {
            return res.status(400).json({
                "message": "ไม่พบข้อมูลใน " + column + " กรุณากรอกข้อมูลให้ครบถ้วน"
            });
        }
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