require 'net/http'

class AnnouncementController < ApplicationController
  def index
	url = URI.parse('http://churchinplano.org/weeklynews/')
	req = Net::HTTP::Get.new(url.to_s)
	res = Net::HTTP.start(url.host, url.port) {|http|
	  http.request(req)
	}
	announcement_url = "http://churchinplano.org/weeklynews/#{res.body.match(/<a href="(en\/.+?\.pdf)">.+?<\/a>/)[1]}"
	render :json => {:url => announcement_url}
  end
end
