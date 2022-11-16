class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    redirect_to action: :index 
    render json:{ post: post } #render json:{ post: post }のように指定します。json:の部分をjsonオプションといい、これを指定することによって、直後に記述した{ post: post }というデータをJSON形式で返却することができます。
    #行目では、7行目で定義した変数postの値を、postというキーとセットでJavaScriptに送信しています。次章、JavaScriptでは受け取った変数postを使用して、メモをブラウザに反映させます。これにより、非同期通信を用いたメモ投稿機能が完成します。


  end
end
