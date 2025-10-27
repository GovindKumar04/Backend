class ApiResponse {
    constructor(stutusCode, data, message="Success"){
        this.statusCode= stutusCode,
        this.data=data,
        this.message=message,
        this.success=this.statusCode < 400
    } 
}

export {ApiResponse} 