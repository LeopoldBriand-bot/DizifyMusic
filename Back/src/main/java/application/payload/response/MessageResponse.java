package application.payload.response;

public class MessageResponse {
	private String message;
	private int c_error;



	public MessageResponse(String message, int c_error) {
	    this.message = message;
	    this.c_error = c_error;
  	}

	public int getC_error() {
		return c_error;
	}

	public void setC_error(int c_error) {
		this.c_error = c_error;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
