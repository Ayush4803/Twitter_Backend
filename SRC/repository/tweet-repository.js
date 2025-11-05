const Tweet = require('../model/tweet');

class TweetRepository {
    // Create a new tweet
    async createTweet(data) {
        try {
            const tweet = await Tweet.create(data); // ✅ Correct way to create a new document
            return tweet;
        } catch (error) {
            console.error("Something went wrong during creating a tweet:", error);
            throw new Error("Failed to create tweet");
        }
    }

    // Get all tweets
    async getAllTweets() {
        try {
            return await Tweet.find();
        } catch (error) {
            console.error("Error fetching tweets:", error);
            throw new Error("Failed to fetch tweets");
        }
    }

    // Get tweet by ID
    async getTweetById(id) {
        try {
            return await Tweet.findById(id);
        } catch (error) {
            console.error("Error fetching tweet by ID:", error);
            throw new Error("Failed to fetch tweet");
        }
    }

    // Update tweet by ID
    async updateTweet(id, updateData) {
        try {
            return await Tweet.findByIdAndUpdate(id, updateData, { new: true });
        } catch (error) {
            console.error("Error updating tweet:", error);
            throw new Error("Failed to update tweet");
        }
    }

    // Delete tweet by ID
    async deleteTweet(id) {
        try {
            return await Tweet.findByIdAndDelete(id);
        } catch (error) {
            console.error("Error deleting tweet:", error);
            throw new Error("Failed to delete tweet");
        }
    }
}

module.exports = new TweetRepository();
