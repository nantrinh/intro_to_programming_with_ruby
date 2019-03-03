# I like Xullnn's solution
class Crypto
  attr_reader :norm_msg, :size, :encrypted_words

  def initialize(msg)
    @norm_msg = msg.downcase.chars.select {|c| c =~ /[0-9a-z]/}.join
    @size = Math.sqrt(norm_msg.size).ceil
    encrypt_words
  end

  alias :normalize_plaintext :norm_msg

  def plaintext_segments
    norm_msg.chars.each_slice(size).map(&:join)
  end

  def ciphertext
    encrypted_words.join
  end

  def normalize_ciphertext
    encrypted_words.join(' ')
  end

  private

  def encrypt_words 
    segs = plaintext_segments
    segs[-1] = segs[-1].ljust(size)
    @encrypted_words = segs.map(&:chars).transpose.map {|x| x.join.strip}
  end
end
