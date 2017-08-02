module LoginHelper

  # Logs in the given user.
  def log_in(user)
    session[:user_id] = user.id
  end

  def valid_user()
    return @current_user ||= User.find_by(id: session[:user_id])
  end
end
