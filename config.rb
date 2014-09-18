require 'sass-globbing'

http_path = "/"
css_dir = "prod"
sass_dir = "sass"

# http_path = ""
# http_generated_images_path = ""
# images_dir = ""
# generated_images_dir = ""
# javascripts_dir = "js"

on_sprite_saved do |filename|
  if File.exists?(filename)
    filenameS = filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
    FileUtils.cp filename, filenameS
    print "sprite saved\n"
    print filename
    $command = "E:/wamp/www/pngquant.exe --ext _png8.png 256 "
    $command << filenameS
    `#$command`
    FileUtils.rm(filenameS)
    filenameS[".png"] = "_png8.png"
    filenameP = filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
    FileUtils.cp filenameS, filenameP
    FileUtils.rm(filenameS)
  end
end
on_stylesheet_saved do |filename|
  if File.exists?(filename)

	str= '?date='
	d = Date.today
	str += d.strftime("%Y%m%d")
	t = Time.now
	str += t.strftime("%H%M")

    css = File.read filename
    File.open(filename, 'w+') do |f|
      f << css.gsub(%r{-s[a-z0-9]{10}\.png}, '.png'+str)
    end
  end
end
