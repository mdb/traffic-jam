require 'fog'

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :haml, { ugly: true }

activate :directory_indexes
activate :syntax, :line_numbers => true

# Add bower_components directory to asset pipeline
sprockets.append_path File.join "#{root}", "bower_components"

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end

# Make middleman-sync work with AWS bucket name containing dots
# https://github.com/karlfreeman/middleman-sync/issues/29
Fog.credentials = {:path_style => true}

# Deployment
activate :sync do |sync|
  sync.fog_provider = 'AWS'
  sync.fog_directory = ENV['AWS_TRAFFIC_JAM_BUCKET']
  sync.fog_region = 'us-east-1'
  sync.aws_access_key_id = ENV['AWS_ACCESS_KEY_ID']
  sync.aws_secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
  sync.existing_remote_files = 'delete'
  # sync.gzip_compression = false # Automatically replace files with their equivalent gzip compressed version
  # sync.after_build = false # Disable sync to run after Middleman build ( defaults to true )
end
